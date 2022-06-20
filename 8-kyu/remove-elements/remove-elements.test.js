const removeEveryOther = require('./remove-elements');

test('', () => {
  expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toStrictEqual(['Hello', 'Hello Again']);
});

test('', () => {
  expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
});

test('', () => {
  expect(removeEveryOther([[1, 2]])).toStrictEqual([[1, 2]]);
});
