'use strict';

var userKnow = prompt ('Do you know me?');
userKnow = userKnow.toLowerCase();

if (userKnow === 'yes' || userKnow === 'y') {
  console.log('Yes');
  alert ('What up! I know you, too.')
} else {
  alert ('Uh, yeah you do.');
  console.log('No');
}

var userCode = prompt ('Am I taking a CodeFellows course?');
userCode = userCode.toLowerCase();

if (userCode === 'yes' || userCode === 'y') {
  console.log('Yes');
  alert ('Damn right I am.')
} else {
  alert ('Uh, yeah I am.');
  console.log('Do you even me?');
}

var userName = prompt ('What is your name?');
alert('Hello, ' + userName + '.');
console.log(userName);