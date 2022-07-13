const enough = require("./check-space");

test("", () => {
  expect(enough(10, 5, 5)).toStrictEqual(0);
});

test("", () => {
  expect(enough(100, 60, 50)).toStrictEqual(10);
});

test("", () => {
  expect(enough(20, 5, 5)).toStrictEqual(0);
});
