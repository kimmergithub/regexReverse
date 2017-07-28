'use strict';

let originDataArray = [];
let splitDataString = '';

// going to have to write a function that turns all the data into a string
let enterData = data => {
  console.log('enterData function !!!!!!!FIRE!!!!!!!');
  originDataArray.push(data);
  console.log('originDataArray.push !!!!!!!!PASS!!!!!!');
};

console.log('Values entered into enterData MUST BE A STRING!!!!')
enterData('5 64 239 239 - + 3');

console.log(' ');
console.log(originDataArray);
console.log('The Data has been accepted as a string');
console.log(' ');

let splitData = () => {
  console.log('splitData function !!!!!!!FIRE!!!!!!!');

  splitDataString = originDataArray[0].split('');
  console.log('splitData phase !!!!!!!!PASS!!!!!!');
};

splitData();
console.log(' ');

console.log('We have succesfully SPLIT all the entered data!');
console.log(splitDataString);
console.log(' ');
console.log('Time to iterate over the ARRAY');
console.log(' ');

// let checkDigit = () => {
//   console.log('checkDigit is !!!!!FIRE!!!!!!');
//   for (var i = 0; i < splitDataString.length; i++) {
//     if (splitDataString[i] === '0' || splitDataString[i] === '1' || splitDataString[i] === '2' || splitDataString[i] === '3' || splitDataString[i] === '4' || splitDataString[i] === '5' || splitDataString[i] === '6' || splitDataString[i] === '7' || splitDataString[i] === '8' || splitDataString[i] === '9') {
//       console.log(splitDataString[i] + ' is a DIGIT!!!');

//     } else {
//     console.log(splitDataString[i] + ' is NOT a digit') ;
//     }
//   }
//   console.log('checkDigit is !!!!!PASS!!!!!!');
// };

let singleLineRegularExpression = () => {
  var regularExpression = [];
  console.log('singleLineRegularExpression() is !!!!!FIRE!!!!!!');
  console.log(' ');
  for (var i = 0; i < splitDataString.length; i++) {
    if ( (!isNaN(parseInt(splitDataString[i]))) && (isNaN(parseInt(splitDataString[(i + 1)]))) && ((!splitDataString[(i - 1)]) || (isNaN(parseInt(splitDataString[(i - 1)])))) ) {
      console.log(splitDataString[i] + ' is a single DIGIT!!!');
      console.log(`\\d`);
      regularExpression.push(`\\d`);
    } else if ( (!isNaN(parseInt(splitDataString[i])) && (!isNaN(parseInt(splitDataString[(i + 1)])))) && (isNaN(parseInt(splitDataString[(i - 1)]))) ) {
      console.log(splitDataString[i] + ' is a DIGIT next to DIGITS!!!');
      console.log(`\\d+`);
      regularExpression.push(`\\d+`);
    } else if ( !isNaN(parseInt(splitDataString[i])) && (isNaN(parseInt(splitDataString[(i + 1)]))) ) {
        console.log(splitDataString[i] + ' is the LAST NUMBER is block');
    } else if ( (splitDataString[i] === ' ') ) {
        console.log(splitDataString[i] + ' is a SPACE');
        console.log('\\s');
        regularExpression.push(`\\s`);
    } else if ( ((splitDataString[i] === ('-') ) || (splitDataString[i] === '(') || (splitDataString[i] === ')') || (splitDataString[i] === '+')) ) {
        console.log(splitDataString[i] + ' is a SINGLE HYPHEN, PAREN, or +SIGN');
        console.log('\\D');
        regularExpression.push(`\\D`);
    }  else {
     console.log(splitDataString[i] + ' NOT AN IF MATCH') ;
    }
  }

  console.log(' ');
  console.log('singleLineRegularExpression() is !!!!!PASS!!!!!!');
  console.log(' ');
  console.log('REGULAR EXPRESSION = ' + regularExpression.join(''));

};


singleLineRegularExpression();

// SAVE THIS FOR WHEN YOU HAVE i DOWN
// && (splitDataString[(i + 1)] === '0' || splitDataString[(i + 1)] === '1' || splitDataString[(i + 1)] === '2' || splitDataString[(i + 1)] === '3' || splitDataString[(i + 1)] === '4' || splitDataString[(i + 1)] === '5' || splitDataString[(i + 1)] === '6' || splitDataString[(i + 1)] === '7' || splitDataString[(i + 1)] === '8' || splitDataString[(i + 1)] === '9')
