'use strict';

var userKnow = prompt ('Do you know me?');
userKnow = userKnow.toLowerCase();

if (userKnow === 'yes' || userKnow === 'y') {
  alert ('What up! I know you, too.');
  console.log('Yes');
} else {
  alert ('Uh, yeah you do.');
  console.log('No');
}

var userCode = prompt ('Am I taking a CodeFellows course?');
userCode = userCode.toLowerCase();

if (userCode === 'yes' || userCode === 'y') {
  alert ('Damn right I am.');
  console.log('Yes');
} else {
  alert ('Uh, yeah I am.');
  console.log('Do you even me?');
}

var userCollege = prompt ('Did I attend college?');
userCollege = userCollege.toLowerCase();

if (userCollege === 'yes' || userCollege === 'y') {
  alert ('I most certainly did. I Northern Arizona University. Go Lumberjacks!');
  console.log('Yes');
} else {
  alert ('Hey now, I am smart, okay!');
  console.log('Do you even me?');
}

var userCity = prompt ('Do I live in Seattle?');
userCity = userCity.toLowerCase();

if (userCity === 'yes' || userCity === 'y') {
  alert ('Yup! I live in Fremont.');
  console.log('Yes');
} else {
  alert ('What, you think I live in the burbs? Aw hell no!');
  console.log('Do you even me?');
}

var userJob = prompt ('Am I employed?');
userCity = userCity.toLowerCase();

if (userJob === 'yes' || userJob=== 'y') {
  alert ('Yup! I work for Alaska Airlines.');
  console.log('Yes');
} else {
  alert ('Wrong! I am employed by Alaska Airlines.');
  console.log('Do you even me?');
}

var userName = prompt ('What is your name?');
alert('Hello, ' + userName + '.');
console.log(userName);
