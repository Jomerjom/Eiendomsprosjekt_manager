export function numberFormatterKM(num) {
    if (num === null) return null;
    if (Math.abs(num) > 999999) {
        const formattedNum = (Math.sign(num) * (Math.abs(num) / 1000000)).toFixed(2);
        return formattedNum % 1 === 0 ? formattedNum.replace('.00', '') + ' Millioner' : formattedNum + ' Millioner';
    } else if (Math.abs(num) > 999) {
        const formattedNum = (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(2);
        return formattedNum % 1 === 0 ? formattedNum.replace('.00', '') + ' Tusen' : formattedNum + ' Tusen';
    } else {
        return Math.sign(num) * Math.abs(num);
    }
}