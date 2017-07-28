'use strict';
    let originalDataArray = [];
    let splitDataString = '';
    let expressionInput = '';

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

// This flicks the DOMINOS... STARTS EVERYTHING FALLING OFF

$('#expression-form').submit(function (event) {
  event.preventDefault();
  console.log('SUBMISSION!!!! ' + $('#expression-input').val());
  console.log('Variables CREATED');
  expressionInput = $('#expression-input').val();
  originalDataArray = [];
  originalDataArray.push(expressionInput);

  enterData(expressionInput);
  splitData();
  singleLineRegularExpression();
})
