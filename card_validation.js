/**
 * Validates a Visa card number.
 * 1. Checks prefix and length using Regex.
 * 2. Verifies integrity using the Luhn Algorithm.
 */
function isValidVisa(cardNumber) {
    // Remove non-digit characters (spaces, hyphens)
    const sanitized = cardNumber.toString().replace(/\D/g, '');

    // 1. Regex Validation
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (!visaRegex.test(sanitized)) {
        return false;
    }

    // 2. Luhn Algorithm (Mod 10 Check)
    let sum = 0;
    let shouldDouble = false;

    // Loop through digits from right to left
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9; // Same as adding digits (e.g., 14 -> 1+4=5)
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10 === 0);
}

// Example Usage:
const testCard = "4111 1111 1111 1111"; // Standard Visa test number
console.log(`Is "${testCard}" a valid Visa?`, isValidVisa(testCard)); 
