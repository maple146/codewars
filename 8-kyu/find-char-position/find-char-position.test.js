const position = require('./find-char-position');

test('', () => {
  expect(position('a')).toStrictEqual('Position of alphabet: 1');
});

test('', () => {
  expect(position('z')).toStrictEqual('Position of alphabet: 26');
});

test('', () => {
  expect(position('e')).toStrictEqual('Position of alphabet: 5');
});
