const multiply = require('./multiply');

test('multiplying 2 by 2 should be 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('multiplying 3 by 5 should be 15', () => {
  expect(multiply(3, 5)).toBe(15);
});