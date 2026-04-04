import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    // TODO: Render ProfileCard met name="Piet" en age={30}
    render(<ProfileCard name="Piet" age={30} />)
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    // Hint: gebruik screen.getByText()
    expect(screen.getByText("Leeftijd: 30")).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    // TODO: Render ProfileCard met bio="Ik hou van programmeren"
    render(<ProfileCard bio="Ik hou van programmeren" />)
    // TODO: Check of die tekst op het scherm staat
    expect(screen.getByText("Ik hou van programmeren")).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    // TODO: Render ProfileCard ZONDER bio prop
    render(<ProfileCard />)
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
    expect(screen.getByText("Geen bio beschikbaar")).toBeInTheDocument();
  });

});
