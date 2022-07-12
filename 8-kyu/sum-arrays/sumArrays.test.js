const sumArrays = require('./sumArrays');

test('', () => {
	expect(sumArrays([])).toBe(0);
});

test('', () => {
	expect(sumArrays([1, 5.2, 4, 0, -1])).toBe(9.2);
});
