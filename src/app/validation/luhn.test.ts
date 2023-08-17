import luhn from './luhn';

test('A valid cc number returns true', () => {
	expect(luhn('79927398713')).toBe(true);
});

test('A transposition typo returns false', () => {
	expect(luhn('79927398731')).toBe(false);
});

test('An off-by-one typo returns false', () => {
	expect(luhn('79927398714')).toBe(false);
});

test('A non-numeric entry returns false', () => {
	expect(luhn('123abc')).toBe(false);
});

test('A valid cc number with spaces returns true', () => {
	expect(luhn('799 273 987 13')).toBe(true);
});
