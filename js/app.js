'use strict';

// Question #1: Do you know me?
var questionOne = function()  {
var userKnow = prompt('Do you know me?');
console.log ('Good morning' + userKnow);
  
userKnow = userKnow.toLowerCase();

console.log ('Do you know me?:', userKnow); // added correct console.log style

if (userKnow === 'yes' || userKnow === 'y') {
  alert ('What up! I know you, too.');
} else {
  alert ('Uh, yeah you do.');
} 
}
questionOne();

// Question #2: Am I taking a CodeFellows course?
var questionTwo = function() {


var userCode = prompt ('Am I taking a CodeFellows course?');
userCode = userCode.toLowerCase();

console.log ('Am I taking a CodeFellows course?:', userCode); // added correct console.log style
if (userCode === 'yes' || userCode === 'y') {
  alert ('Damn right I am.');
} else {
  alert ('Uh, yeah I am.');
}
}
questionTwo ();

// Question #3: Did I attend college?

var questionThree = function() {
var userCollege = prompt ('Did I attend college?');
userCollege = userCollege.toLowerCase();

console.log ('Did I attend college?:', userCollege); // added correct console.log style

if (userCollege === 'yes' || userCollege === 'y') {
  alert ('I most certainly did. I Northern Arizona University. Go Lumberjacks!');
} else {
  alert ('Hey now, I am smart, okay!');
}
}
questionThree();

// Question #4: Do I live in Seattle?
var questionFour = function() {
var userCity = prompt ('Do I live in Seattle?');
userCity = userCity.toLowerCase();

console.log ('Do I live in Seattle?:', userCity); // added correct console.log style

if (userCity === 'yes' || userCity === 'y') {
  alert ('Yup! I live in Fremont.');
} else {
  alert ('What, you think I live in the burbs? Aw hell no!');
}
}
questionFour ();

// Question #5: Am I employed?
var questionFive = function(){
var userJob = prompt ('Am I employed?');
userJob = userJob.toLowerCase();

console.log ('Am I employed?:', userJob); // added correct console.log style

if (userJob === 'yes' || userJob=== 'y') {
  alert ('Yup! I work for Alaska Airlines.');
} else {
  alert ('Wrong! I am employed by Alaska Airlines.');
}
}
questionFive ();

// Question #6: What is your name?
var questionSix = function(){
var userName = prompt ('What is your name?');

console.log ('What is your name?:', userName); // added correct console.log style

alert('Hello, ' + userName + '.');
}
questionSix ();

// Question #7: How old am I?
var userAge = prompt ('How old am I?');
userAge = parseFloat(userAge);
console.log (typeof userAge);
if (userAge > (30)) {
  alert ('Too high!');
} else if (userAge === 30) {
  alert ('You guessed it right!');
} else if (userAge < 30) {
  alert ('Too low!');
}


