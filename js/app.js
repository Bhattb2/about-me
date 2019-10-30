'use strict';
var userName = prompt ('What is your name?');
alert('Hello, ' + userName + '.');
console.log(userName);

var userKnow = prompt ('Do you know me?');
userKnow = userKnow.toLowerCase();

if (userKnow === 'yes' || userKnow === 'y') {
  console.log('Yes');
} else {
  alert ('Uh, yeah you do.');
  console.log('No');
}
console.log('userName');
