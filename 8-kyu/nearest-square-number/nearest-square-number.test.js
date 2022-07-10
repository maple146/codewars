const nearestSq = require('./nearest-square-number');

test('', () => {
	expect(nearestSq(1)).toBe(1);
});

test('', () => {
	expect(nearestSq(2)).toBe(1);
});

test('', () => {
	expect(nearestSq(10)).toBe(9);
});

test('', () => {
	expect(nearestSq(111)).toBe(121);
});

test('', () => {
	expect(nearestSq(9999)).toBe(10000);
});
