import { getRank, addScores, hasWon, getHighScore } from './gameUtils.js';

test('Geef Noob terug met 0', () => {
    const result = getRank(0);

    expect(result).toBe('Noob')
})

test('Geef Pro terug met 50', () => {
    const result = getRank(50);

    expect(result).toBe('Pro');
})

test('Geef 50 terug met 30 en 20', () => {
    const result = addScores(30, 20);

    expect(result).toBe(50);
})