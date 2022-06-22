const repeatStr = require('./string-repeat');

test('', () => {
  expect(repeatStr(3, "*")).toBe("***");
});

test('', () => {
  expect(repeatStr(5, "#")).toBe("#####");
});

test('', () => {
  expect(repeatStr(7, "aA")).toBe("aAaAaAaAaAaAaA");
});
