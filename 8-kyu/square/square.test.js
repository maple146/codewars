const square = require('./square');

test('34 squared should return 1156', () => {
  expect(square(34)).toBe(1156);
});

test('68 squared should return 4624', () => {
  expect(square(68)).toBe(4624);
});

test('19 squared should return 361', () => {
  expect(square(19)).toBe(361);
});

test('23 squared should return 529', () => {
  expect(square(23)).toBe(529);
});

test('94 squared should return 8836', () => {
  expect(square(94)).toBe(8836);
});

test('0 squared should return 0', () => {
  expect(square(0)).toBe(0);
});
