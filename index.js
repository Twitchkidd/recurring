"use strict";
var schedule = require("node-schedule");

// >> Okay, so you can pass in a date object!
/*
  * var date = new Date(2019, 6, 28, 14, 6, 35, 0);
  * var now = Date.now();

  * console.log("now");
  * console.log(now);
  * console.log("date:");
  * console.log(date.getTime());

  * var j = schedule.scheduleJob(date, function() {
  *   console.log("Ayoo!!");
  * });
*/

// >> You can also pass in a rule object!
/*
 * var rule = new schedule.RecurrenceRule();
 * rule.second = 15;
 *
 * var j = schedule.scheduleJob(rule, function() {
 *   console.log("Ayoo!");
 * });
 */

// >> I need a function that tells me to get up
// >> every once and a while and then when to
// >> get back to it ...

var now = Date.now();

//function addMinutes(date, minutes) {
//  date.setMinutes(date.getMinutes() + 25)
//  return date;
//}

// ? So obviously hardcoding it for four cycles
// ? is ... you know, gets us going. 2hr Pomodoro Bot?
//var j;
//for (i = 8; i > 0; i--)  {
//  if (i % 2 === 0) {
//    j = schedule.scheduleJob(
//}

var date = new Date(2019, 7, 1, 16, 42, 0);
var j = schedule.scheduleJob(date, function() {
  console.log("Laundry is done!");
  // console.log("Hey! Listen!\nTime to code!\nCoding time!\nGo go go!");
  // console.log("Hey! Listen!\nTime for design!\nStand up!\nStanding time!\n");
});
