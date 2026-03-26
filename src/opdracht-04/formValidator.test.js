import { isValidEmail, isValidPhone, isValidPostcode, validateForm } from './formValidator';

describe('Form Validator', () => {
  let testData;

  beforeEach(() => {
    testData = {
      email: 'test@example.com',
      phone: '0612345678',
      postcode: '1234 AB'
    };
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: isValidEmail accepteert geldig email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail weigert email zonder @', () => {
    testData.email = 'testexample.com'
    expect(isValidEmail(testData.email)).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert 06 nummer', () => {
    expect(isValidPhone(testData.phone)).toBe(true); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert nummer met streepjes', () => {
    testData.phone = '06-1234-5678';
    expect(isValidPhone(testData.phone)).toBe(true); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode met spatie', () => {
    expect(isValidPostcode(testData.postcode)).toBe(true); // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode zonder spatie', () => {
    testData.postcode = '1234AB';
    expect(isValidPostcode(testData.postcode)).toBe(true); // Deze test faalt! Vervang met je eigen test
  });

  test('validateForm geeft errors bij ongeldig formulier', () => {
    // TODO: Gebruik de testData uit beforeEach
    // TODO: Verander testData.email naar iets ongeldig
    testData.email = 'testexample.com';
    // TODO: Check of errors array niet leeg is
    const result = validateForm(testData);

    // Hint: Je moet eerst beforeEach invullen!
    expect(result.errors).toContain('Ongeldig email adres'); // Deze test faalt! Vervang met je eigen test
  });

});
