function convertToRoman(num) {
  let romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }

  // transform number in array of separate integers
  let numToArray = num.toString()
      .split("")
      .map(a => parseInt(a));

  // array to store numbers according to position and corresponding roman numeral
  let arrayToConvert = []
  
  // helper function to add numbers correspoding to roman numerals to the beginning of arrayToConvert
  function powerOfTen(array, num, power, thisManyTimes) {
    for (let i = 0; i < thisManyTimes; i++) {
      array.unshift(num * Math.pow(10, power))
    }
  }
  
  // loop through numToArray from the last to the first element, with another variable j to increase the power of 10 as the position shifts
  for (let i = numToArray.length - 1, j = 0; i >= 0; i--, j++) {
    if (numToArray[i] <= 3) {
      powerOfTen(arrayToConvert, 1, j, numToArray[i]);
    } else if (numToArray[i] === 4) {
      powerOfTen(arrayToConvert, 4, j, 1);
    } else if (numToArray[i] < 9) {
      powerOfTen(arrayToConvert, 1, j, numToArray[i] - 5);
      powerOfTen(arrayToConvert, 5, j, 1);
    } else if (numToArray[i] === 9) {
      powerOfTen(arrayToConvert, 9, j, 1);
    }
  }

  // convert each number to the corresponding roman numeral and turn them into a single string
  return arrayToConvert.map(number => number = romanNumerals[number]).join("");
}

console.log(convertToRoman(3999));