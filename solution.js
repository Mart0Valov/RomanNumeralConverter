const romanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
};

function convertToRoman(num) {
    let inRoman = '';
    let strNumber = String(num);
    if (Object.keys(romanNumerals).includes(String(num))) {
        return romanNumerals[String(num)];
    } else {
        for (let i = 0; i < strNumber.length; i++) {
            let larger = strNumber.slice(i);
            let smaller = strNumber.slice(i + 1);
            let wholeNumber = larger - smaller;
            if (!wholeNumber == 0) {

                if (Object.keys(romanNumerals).includes(String(wholeNumber))) {
                    inRoman += romanNumerals[wholeNumber];
                } else {
                    // check if bigger than 5(length of num - 1)
                    let fiveBorder = Number(`5${'0'.repeat(String(wholeNumber).length - 1)}`);
                    if (wholeNumber > fiveBorder) {
                        inRoman += romanNumerals[String(fiveBorder)];
                        let sign = romanNumerals[`1${'0'.repeat(String(wholeNumber).length - 1)}`];
                        inRoman += sign.repeat(String(wholeNumber - fiveBorder)[0]);
                    } else {
                        let repetitions = Number(String(wholeNumber)[0]);
                        let sign = romanNumerals[String(wholeNumber / repetitions)];
                        inRoman += sign.repeat(repetitions);
                    }
                }
            }
        }
    }


    return inRoman;
}

const res = convertToRoman(500);
console.log(res);

// console.log(Object.keys(romanNumerals).includes(90));