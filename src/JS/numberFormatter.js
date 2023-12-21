/**
 * Formats a numerical value into a string representation with abbreviated units (Thousand or Million).
 *
 * @function numberFormatterKM
 * @param {number} num - The numerical value to be formatted.
 * @returns {string|null} A formatted string representation of the number with abbreviated units, or null if the input is null.
 */
export function numberFormatterKM(num) {
    // Return null if the input is null
    if (num === null) return null;

    // Check if the absolute value of the number is greater than 999,999 (Million)
    if (Math.abs(num) > 999999) {
        // Format the number in Million units with two decimal places
        const formattedNum = (Math.sign(num) * (Math.abs(num) / 1000000)).toFixed(2);

        // Check if the formatted number has no decimal part, and adjust the output accordingly
        return formattedNum % 1 === 0 ? formattedNum.replace('.00', '') + ' Millioner' : formattedNum + ' Millioner';
    } else if (Math.abs(num) > 999) {
        // Format the number in Thousand units with two decimal places
        const formattedNum = (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(2);

        // Check if the formatted number has no decimal part, and adjust the output accordingly
        return formattedNum % 1 === 0 ? formattedNum.replace('.00', '') + ' Tusen' : formattedNum + ' Tusen';
    } else {
        // Return the original number for values less than 1000
        return Math.sign(num) * Math.abs(num);
    }
}