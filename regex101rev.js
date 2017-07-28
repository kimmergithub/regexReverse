'use strict';
let originalDataArray = [];
let splitDataString = '';
let expressionInput = '';
let regularExpressionOutput = [];

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// going to have to write a function that turns all the data into a string

let enterData = data => {
  console.log('enterData function !!!!!!!FIRE!!!!!!!');
  originalDataArray.push(data);
  console.log('originalDataArray.push !!!!!!!!PASS!!!!!!');
};

let splitData = () => {
  console.log('splitData function !!!!!!!FIRE!!!!!!!');

  splitDataString = originalDataArray[0].split('');
  console.log('splitData phase !!!!!!!!PASS!!!!!!');
};

let singleLineRegularExpression = () => {
  regularExpressionOutput = [];
  console.log('singleLineRegularExpression() is !!!!!FIRE!!!!!!');
  console.log(' ');
  for (var i = 0; i < splitDataString.length; i++) {
    if ( (!isNaN(parseInt(splitDataString[i]))) && (isNaN(parseInt(splitDataString[(i + 1)]))) && ((!splitDataString[(i - 1)]) || (isNaN(parseInt(splitDataString[(i - 1)])))) ) {
      console.log(splitDataString[i] + ' is a single DIGIT!!!');
      console.log(`\\d`);
      regularExpressionOutput.push(`\\d`);
    } else if ( (!isNaN(parseInt(splitDataString[i])) && (!isNaN(parseInt(splitDataString[(i + 1)])))) && (isNaN(parseInt(splitDataString[(i - 1)]))) ) {
      console.log(splitDataString[i] + ' is a DIGIT next to DIGITS!!!');
      console.log(`\\d+`);
      regularExpressionOutput.push(`\\d+`);
    } else if ( !isNaN(parseInt(splitDataString[i])) && (isNaN(parseInt(splitDataString[(i + 1)]))) ) {
        console.log(splitDataString[i] + ' is the LAST NUMBER is block');
    } else if ( (splitDataString[i] === ' ') ) {
        console.log(splitDataString[i] + ' is a SPACE');
        console.log('\\s');
        regularExpressionOutput.push(`\\s`);
    } else if ( ((splitDataString[i] === ('-') ) || (splitDataString[i] === '(') || (splitDataString[i] === ')') || (splitDataString[i] === '+')) ) {
        console.log(splitDataString[i] + ' is a SINGLE HYPHEN, PAREN, or +SIGN');
        console.log('\\D');
        regularExpressionOutput.push(`\\D`);
    } else if ( (alphabet.indexOf(splitDataString[i]) > -1) && ((alphabet.indexOf(splitDataString[(i + 1)]) === -1) && (alphabet.indexOf(splitDataString[(i - 1)]) === -1)) ) {
        console.log(splitDataString[i] + ' is a SINGLE LETTER');
        console.log('\\w');
        regularExpressionOutput.push(`\\w`);
      } else if ( (alphabet.indexOf(splitDataString[i]) > -1) && (alphabet.indexOf(splitDataString[(i + 1)]) > -1) && (alphabet.indexOf(splitDataString[(i - 1)]) === -1) ) {
            console.log(splitDataString[i] + ' is a SINGLE LETTER');
            console.log('\\w+');
            regularExpressionOutput.push(`\\w+`);
    } else {
     console.log(splitDataString[i] + ' NOT AN IF MATCH') ;
    }
  }
  regularExpressionOutput = regularExpressionOutput.join('');
  console.log(' ');
  console.log('singleLineRegularExpression() is !!!!!PASS!!!!!!');
  console.log(' ');
  console.log('REGULAR EXPRESSION = ' + regularExpressionOutput);

};

let appendRegularExpression = () => {
  $('#regular-expression-output').html(regularExpressionOutput)
}

// This flicks the DOMINOS... STARTS EVERYTHING FALLING OFF
$('#expression-form').submit(function (event) {
  event.preventDefault();
  $('#regular-expression-output').html('');
  console.log('SUBMISSION!!!! ' + $('#expression-input').val());
  console.log('Variables CREATED');
  expressionInput = $('#expression-input').val();
  originalDataArray = [];
  originalDataArray.push(expressionInput);
  enterData(expressionInput);
  splitData();
  singleLineRegularExpression();
  appendRegularExpression();
})
