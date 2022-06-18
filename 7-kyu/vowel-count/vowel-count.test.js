const getCount = require('./vowel-count');

test("should return 5 for 'abracadabra'", () => {
  expect(getCount("abracadabra")).toBe(5);
});

test("should return 4 for 'pear tree'", () => {
  expect(getCount("pear tree")).toBe(4);
});

test("should return 13 for 'o a kak ushakov lil vo kashu kakao'", () => {
  expect(getCount("o a kak ushakov lil vo kashu kakao")).toBe(13);
});