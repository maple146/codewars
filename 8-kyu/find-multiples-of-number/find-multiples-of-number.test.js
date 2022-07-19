const findMultiples = require('./find-multiples-of-number');

test('', () => {
  expect(findMultiples(5, 25)).toStrictEqual([5, 10, 15, 20, 25]);
});

test('', () => {
  expect(findMultiples(1, 2)).toStrictEqual([1, 2]);
});

test('', () => {
  expect(findMultiples(5, 7)).toStrictEqual([5]);
});

test('', () => {
  expect(findMultiples(4, 27)).toStrictEqual([4, 8, 12, 16, 20, 24]);
});

test('', () => {
  expect(findMultiples(11, 54)).toStrictEqual([11, 22, 33, 44]);
});
