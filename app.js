//This is where you should incorporate your modules and execute your app
var response = require('./autoResponse.js');
var fs = require('fs');
var weekday = require('weekday');

var autoRespond = response();

var today = weekday(weekday() + 1);
//
var message = autoRespond.getResponse(today);

fs.appendFile('message.txt', message, function (err) {
  if (err) throw err;
  console.log(message + ' was appended to file!');
});
