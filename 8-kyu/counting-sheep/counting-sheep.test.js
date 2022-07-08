const countSheeps = require('./counting-sheep');

let array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

let array2 = [];
for (let index = 0; index < 500; index++) array2.push(true);
for (let index = 0; index < 5; index++) array2.push(undefined);
for (let index = 0; index < 100; index++) array2.push(false);

let array3 = [];
for (let index = 0; index < 500; index++) array3.push(null);
for (let index = 0; index < 5; index++) array3.push(undefined);
for (let index = 0; index < 100; index++) array3.push(false);

test('There should be 17 sheeps in total', () => {
	expect(countSheeps(array1)).toBe(17);
});

test('There should be 500 sheeps in total', () => {
	expect(countSheeps(array2)).toBe(500);
});

test('There should be 0 sheeps in total', () => {
	expect(countSheeps(array3)).toBe(0);
});
