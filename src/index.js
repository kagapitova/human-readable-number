const arrNum = [
    {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    },
    {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }
];

module.exports = function toReadable(number) {
    if (number < 100) {
        return numStr(number)
    }
    number = number.toString().split('')
    let res = arrNum[0][number[0]] + ' hundred ';
    if (number[1] === '0' && number[2] === '0') {
        return res.trim()
    } else {
        res = res + numStr(parseInt(number[1] + number[2]));
        return res.trim()
    }
}

function numStr(number) {
    if (number === 0) {
        return 'zero'
    }
    if (number < 20) {
        return arrNum[0][number]
    }

    number = number.toString().split('')
    let res = arrNum[1][number[0]] + " " + arrNum[0][number[1]];
    return res.trim()
}
