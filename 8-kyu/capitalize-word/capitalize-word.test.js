const capitalizeWord = require("./capitalize-word");

test("", () => {
  expect(capitalizeWord('word')).toStrictEqual('Word');
});

test("", () => {
  expect(capitalizeWord('i')).toStrictEqual('I');
});

test("", () => {
  expect(capitalizeWord('glasswear')).toStrictEqual('Glasswear');
});