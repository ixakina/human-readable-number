module.exports = function toReadable(number) {
    let nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let str = number.toString();
    let res;
    if (str.length == 3 && str.indexOf("0") == 1 && str.lastIndexOf("0") == 2) {
        res = nums[str[0]] + " hundred";
    } else if (str.length == 3 && str.indexOf("1", 1) == 1) {
        res = nums[str[0]] + " hundred " + nums[10 + Number(str[2])];
    } else if (
        str.length == 3 &&
        str.indexOf("0") == 2 &&
        str.lastIndexOf("0") == 2
    ) {
        res = nums[str[0]] + " hundred " + tens[`${str[1]}0`];
    } else if (
        str.length == 3 &&
        str.indexOf("0") == 1 &&
        str.lastIndexOf("0") == 1
    ) {
        res = nums[str[0]] + " hundred " + nums[`${str[2]}`];
    } else if (str.length == 3) {
        res =
            nums[str[0]] +
            " hundred " +
            tens[`${str[1]}0`] +
            " " +
            nums[str[2]];
    } else if (str.length == 2 && str.indexOf("1") == 0) {
        res = nums[Number(str)];
    } else if (str.length == 2 && str.indexOf("0") == 1) {
        res = tens[str];
    } else if (str.length == 2) {
        res = tens[`${str[0]}0`] + " " + nums[str[1]];
    } else {
        res = nums[Number(str)];
    }
    return res;
};
