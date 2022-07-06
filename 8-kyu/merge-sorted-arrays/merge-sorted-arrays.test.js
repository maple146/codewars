const mergeArrays = require('./merge-sorted-arrays');

test('Should work for 2 empty arrays', () => {
  expect(mergeArrays([], [])).toStrictEqual([]);
});

test('Should work for only 1 empty array', () => {
  expect(mergeArrays([1,2,3], [])).toStrictEqual([1,2,3]);
});

test('Should work for only 1 empty array', () => {
  expect(mergeArrays([], [5,4,3,2,1])).toStrictEqual([1,2,3,4,5]);
});

test('Should work for both only 1 number', () => {
  expect(mergeArrays([8], [2])).toStrictEqual([2,8]);
});

test('Should work for negative numbers', () => {
  expect(mergeArrays([-3,-2,-1,0], [1,2,3,4])).toStrictEqual([-3,-2,-1,0,1,2,3,4]);
});
