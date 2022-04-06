const methods = require('./main');

describe('String Length', () => {
  test('"Mohamed" to have length 7', () => {
    expect(methods.stringLength('Mohamed')).toBe(7);
  });
  test('string is at least 1 character long', () => {
    expect(methods.stringLength('Mohamed')).not.toBeNull();
  });
  test('string not longer than 10 characters', () => {
    expect(() => methods.stringLength('MohamedSalah')).toThrow();
  });
});

describe('Reverse String', () => {
  test('"mohamed" to be "demahom"', () => {
    expect(methods.reverseString('mohamed')).toBe('demahom');
  });
});

describe('Calculator', () => {
  test('2 + 3 to equal 5', () => {
    expect(methods.calculator.add(2, 3)).toBe(5);
  });
  test('3 - 2 to equal 1', () => {
    expect(methods.calculator.subtract(3, 2)).toBe(1);
  });
  test('2 * 3 to equal 6', () => {
    expect(methods.calculator.multiply(2, 3)).toBe(6);
  });
  test('4 / 2 to equal 2', () => {
    expect(methods.calculator.divide(4, 2)).toBe(2);
  });
});

describe('Capitalize', () => {
  test('"mohamed" to be "Mohamed"', () => {
    expect(methods.capitalize('mohamed')).toBe('Mohamed');
  });
  test('string length lest than 1 to throw an error', () => {
    expect(() => methods.capitalize('')).toThrow();
  });
  test('input is number to throw an error', () => {
    expect(() => methods.capitalize(12)).toThrow();
  });
});
