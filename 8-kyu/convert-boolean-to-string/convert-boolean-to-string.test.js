const booleanToString = require("./convert-boolean-to-string");

test("", () => {
  expect(booleanToString(true)).toStrictEqual('true');
});

test("", () => {
  expect(booleanToString(false)).toStrictEqual('false');
});
