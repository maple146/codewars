const setAlarm = require('./set-alarm');

test('Turn off the alarm', () => {
	expect(setAlarm(true, true)).toBe(false);
	expect(setAlarm(false, true)).toBe(false);
	expect(setAlarm(false, false)).toBe(false);
});

test('Set the alarm', () => {
	expect(setAlarm(true, false)).toBe(true);
});
