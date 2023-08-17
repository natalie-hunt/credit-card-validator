export default function luhn(ccNumber: String) {
	// remove spaces
	const trimmedNumber = ccNumber.replaceAll(' ', '');
	// reject on any non-numeric characters
	if (/\D/.test(trimmedNumber)) {
		return false;
	}

	let sum = 0;
	let isSecondDigit = false;

	// traverse the number starting from the end
	for (let i = trimmedNumber.length - 1; i >= 0; i--) {
		let digit = parseInt(trimmedNumber.charAt(i));
		if (isSecondDigit) {
			// for every second digit, double it. If it's two digits after doubling, add each digit
			digit = digit * 2;
			sum += digit % 10; // first digit
			sum += Math.trunc(digit / 10); // second digit, if it exists
		} else {
			sum += digit;
		}

		isSecondDigit = !isSecondDigit;
	}

	// the number is valid if the sum is divisible by 10
	return sum % 10 === 0;
}