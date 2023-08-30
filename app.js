//===========================Chapter 21 (Changing Case)======================================================

//1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase;Note: Correct this statement by yourself
var allLower = uswrInput.toLowerCase();

//2. Convert the string represented by x to lower-case and assign the result to the same variable.
    x = x.toLowerCase();

//3. Convert the string represented by y to upper-case and assign the result to the same variable.
    y = y.toUpperCase();

//4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared  beforehand.
var x = "EMAD";
var y = x.toLowerCase(x);
console.log(y);

//5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
var myArray = ['EMAD','ZAID'];
var index = 1;
var lowercase = myArray[index].toLowerCase();
console.log(lowercase);

//6. Display in an alert the upper-case version of the string represented by a variable.
var inputString = "Hello World";
var convertedString = inputString.toUpperCase(inputString);
alert(convertedString);

//7. var cityName = “kaRacHi”;Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLocaleLowerCase();
console.log(capitalizedCityName);
//--------------------------------------------------------------------------------------------------------

//============================Chapter 22 - 25 (Strings)====================================================

//1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
var sameWord = "captain";
var slicePart = sameWord.slice(1,3);
console.log(slicePart);

//2. The number of characters in the string will be assigned to the variable.
var myName = "Emad Ali Khan";
var numberOfCharacters = myName.length;
console.log(numberOfCharacters);

//3. The string "elephant" has been assigned to the variable animal.Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2,6);
console.log(seg);

//4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
var inputString = "lorem ipsum"; 
var numberOfCharacters = inputString.length;
var secondVariable = numberOfCharacters;
console.log(secondVariable); 

//5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand
var inputString = "lorem ipsum";
var numberOfCharacters = inputString.length;
var slicedcharacters = inputString.slice(0,1) + inputString.slice(-3);
console.log("number of characters: " + numberOfCharacters);
console.log("sliced characters are: " + slicedcharacters);

//6. var text = "To be or not to be."; var indx = text.indexOf("be");What is the value of indx?
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log("The value of indx is "+ indx);
// The value of indx is 3.

//7. var text = "To be or not to be."; var indx = text.lastIndexOf("be");What is the value of indx?
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log("The value of indx is" + indx);

//8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
var text = "Let's go on a journey. It's time to go.";
var lastIndex = text.lastIndexOf('go');
var indx = lastIndex;
console.log("Index of the first character of the last instance of 'go': " + indx);

//9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (indexNum >= 0 && indexNum < str.length) {

}

//10. In this string "abcde", what character is at index 2? (Use charAt)
var string = "abcde";
var character = string.charAt(2);
console.log(character);

//11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
var text = "This is a sample text.";
var cha = text.charAt(9);
console.log(cha);

//12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
var str = "This is a sample text";
var x = str.at(-1);
console.log(x);

//13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
var inp = "My name is Emad";
var cha = inp.charAt(4);
console.log(cha);

//14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
var str = "Hello World";
var particularCharacter = 'l';
if(str.length>=3 && str.charAt(2)=== particularCharacter){
    console.log("The 3rd character is the particular character.");
} else {
    console.log("The 3rd character is not the particular character.");
}

//15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
var reply = "no, not really, it's a no from me";
var revisedReply = reply.replace("no","yes");
var charArray = [];
for(var i=0; i<revisedReply.length; i++){
    charArray.push(revisedReply.charAt(i));
}
console.log(charArray);

//16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
var str = "1 is the loneliest number, especially the first one";
var newStr = str.replace("1", "one");
console.log(newStr);

//17. If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");
var y = x.replace(/a/g, "z");
//--------------------------------------------------------------------------------------------------------

//===========================Chapter 26 (Rounding Numbers)================================================

//1. Form a statement that rounds a number to the nearest integer.
var convertedNum = Math.round(num);

//2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
var origNum = 10.2;
var roundNum = Math.round(origNum);
console.log(roundNum);

//3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
var origNum = 10.9;
roundNum = Math.floor(origNum);
console.log(roundNum);

//4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
var Num = 7.89;
var convertedNum = Math.round(Num);
console.log(convertedNum);

//5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
var num = .5;
var convertedNum = Math.floor(num);
console.log(convertedNum);
//----------------------------------------------------------------------------------------------------------

//===================================Chapter 27 (Random Numbers)=========================================
//1. Convert a random number generated by JavaScript to a number in the range 1 to 50
var random = Math.random();
var numberInRange = Math.floor(random*50) + 1;
console.log(numberInRange);

//2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
var random = Math.random();
console.log(random);

//3. You have to create a dice in JavaScript with the use of pseudo-random number
function rollDice(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
var diceRollResult = rollDice();
console.log("you rolled a " + diceRollResult);

//4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
var random = Math.random();
var newRandom = Math.round(random);
if(newRandom === 1){
    console.log("head");
}else{
    console.log("Tail");
}
//------------------------------------------------------------------------------------------------------

//=================================Chapter 28, 29 (Converting Strings)=====================================

//1. How do you convert a string to an integer in JavaScript?
var string = "1234";
var convertedString = parseInt(string);
console.log(convertedString);

//2. Write a JavaScript function to convert the string "123" to an integer
var string = "123";
var convertedString = parseInt(string);
console.log(convertedString);

//3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
var string = "3.142";
var convertedString = parseFloat(string);
console.log(convertedString);

//4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
var string = "42";
var isConvertedToNumber = !isNaN(string);

if(isConvertedToNumber){
    var intNumber = parseInt(string);
    var floatNumber = parseFloat(string);
    console.log("Integer Conversion: ",intNumber);
    console.log("Float Conversion: ",floatNumber);
}else{
    console.log("Input is not convertible to number:");
}

//5. How can you convert a number to a string in JavaScript?
var num = 123;
var numToString = num.toString();
console.log(numToString);

//6. Write a JavaScript function to convert the number 42 to a string.
var num = 42;
var numToString = num.toString();
console.log(numToString);

//7. Can you convert a string representing a decimal number (e.g.,"3.14") to an integer in JavaScript? If so, how?
var decimalString = "3.14";
var integerNumber = decimalString.toString();
console.log(integerNumber);
//--------------------------------------------------------------------------------------------------------

//=====================Chapter 30 (Controlling the length of decimals==================================

//1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
var num = 3.14356789;
var newNum = num.toFixed(4).toString();
console.log(newNum);

//2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable
var num = 2.34567067;
num = parseFloat(num.toFixed(2));
console.log(num);

//3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
if(num.toFixed(2).toString().length > 4){

}

//4. Assign a number with many decimal places to a variable.Code an alert that displays the number rounded to 2 decimal places and converted to a string
var longDecimal = 5.3568342636578589;
var roundedString = num.toFixed(2).toString();
alert(roundedString);
//-----------------------------------------------------------------------------------------------------

//===========================Chapter 31 - 34 (Date & Time)===============================================

//1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
var dObj = new Date();
console.log(dObj);

//2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var date = new Date();
var dStr = date.toISOString();
console.log(dStr);

//3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.getDate();
console.log(day);

//4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
var d = new Date();
var dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
var day = d.getDay();
console.log(dayNames[day]);

//5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();

var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var dayOfWeek = d.getDay();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var milliSec = d.getMilliseconds();

console.log("Date: ",d);
console.log("Year: ",year);
console.log("Month: ",month);
console.log("Date: ",day);
console.log("Day: ",dayOfWeek);
console.log("Hours: ",hours);
console.log("Minutes: ",min);
console.log("Seconds: ",sec);
console.log("MilliSecond: ",milliSec);

//6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
var later = new Date(2020,12,0);
console.log(later);

//7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
var later = new Date(1992,1,2);
console.log(later);

//8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
var referenceDate = new Date();
var beginningOf1980 =  new Date(1980,0,1);
var elapsedMilliSecond = referenceDate - beginningOf1980;
alert(elapsedMilliSecond);

//9. How do you change the year of a date in JavaScript?
var date = new Date();
date.setFullYear(2020);
console.log(date);

//10. Write a JavaScript function to change the month of a given date to January
function changeMonthToJanuary(inputDate){
    inputDate.setMonth(0);
    return inputDate;
}
var inputDate = new Date(2020,6,15);
var updatedDate = changeMonthToJanuary(inputDate);
console.log(updatedDate);

//1. What is the method to change the day of the week for a specific date in JavaScript?

var originalDate = new Date();
var targetDay = 4;
var dayDifference = targetDay - originalDate.getDay();
originalDate.setDate(originalDate.getDay() + dayDifference);
console.log("OriginalDate: " ,originalDate.toDateString());

//12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
function changeMinutesOfTime(originalTime) {
    const newMinutes = +prompt('Enter the new minutes:');
  
    if (isNaN(newMinutes) || newMinutes < 0 || newMinutes > 59) {
      console.log('Invalid minutes entered.');
      return;
    }
    const timeComponents = originalTime.split(':');
    if (timeComponents.length !== 2) {
      console.log('Invalid time format.');
      return;
    }
    const hours = parseInt(timeComponents[0], 10);
    const minutes = newMinutes;
  
    if (hours < 0 || hours > 23) {
      console.log('Invalid hours in original time.');
      return;
    }  
    const modifiedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return modifiedTime;
  }

  const originalTime = '14:30'; // Example original time in HH:MM format
  const modifiedTime = changeMinutesOfTime(originalTime);  
  if (modifiedTime) {
    console.log(`Modified Time: ${modifiedTime}`);
  }

//13. Write a JavaScript function to add a specific number of hours to a given time.
function addHoursToTime(originalTime, hoursToAdd) {
    const timeComponents = originalTime.split(':');
    if (timeComponents.length !== 2) {
      console.log('Invalid time format.');
      return;
    }
  
    const hours = parseInt(timeComponents[0], 10);
    const minutes = parseInt(timeComponents[1], 10);
  
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      console.log('Invalid time entered.');
      return;
    }
  
    const totalMinutes = hours * 60 + minutes;
    const newTotalMinutes = totalMinutes + hoursToAdd * 60;
  
    const newHours = Math.floor(newTotalMinutes / 60) % 24;
    const newMinutes = newTotalMinutes % 60;
  
    const modifiedTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    return modifiedTime;
  }
  const originalTime = '14:30'; // Example original time in HH:MM format
  const hoursToAdd = 3; // Example number of hours to add
  const modifiedTime = addHoursToTime(originalTime, hoursToAdd);  
  if (modifiedTime) {
    console.log(`Modified Time: ${modifiedTime}`);
  }

 // 14. You have to create a age calculator in JavaScript.  
function calculateAge(birthDate){
    var birthDate = new Date(birthDate);
    var currentDate = new Date();

    if(isNaN(birthDate) || birthDate >  currentDate){
        console.log("Invalid Birthdate: ");
        return;
    }

    var yearDifference = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if(monthDifference<0 || (monthDifference == 0 && currentDate.getDate() < birthDate.getDate())){
        return yearDifference-1;
    }else{
        return yearDifference;
    }
}
var birthDate = "2003-09-13";
var age = calculateAge(birthDate);
console.log(age);


//====================================Chapter 35 - 37 (Functions)==============================================================

//1. Code the first line of a function displayAlert
function displayAlert(){

}

//2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName(){
  var userName = prompt("Enter Name: ");
}

//3. Code a function that calls 2 other functions.
function mainFunction(){

    functionOne();

    functionTwo();
}

function functionOne(){
  console.log("This is function One.");
}
function functionTwo(){
  console.log("This is function Two.");
}
mainFunction();

//4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
function displayName(){
  var userName = prompt("Enter Name:");
  alert("Your Name Is: ",userName);
}

//5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
function concat(a,b,c){

}
concat(myVar,"Hello",42);

//6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
function Concatenate(param1,param2){
  var concatenatedResult = param1 + param2;
  return concatenatedResult;
}
var resultVariable = Concatenate("Hello","World!");
console.log(resultVariable);

//7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function Multiply(num1,num2,num3) {
  var Multiply = num1 * num2 * num3;
  return Multiply;
}
var MultipliedResult = Multiply(2,3,4);
console.log(MultipliedResult);

//8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numberArray){
  var sum = 0;
  for(var i=0; i<numberArray.length; i++){
    sum += numberArray[i];
  }
  var average = sum / numberArray.length;
  return average;
}
var numberArray = [10,20,30,40,50];
var avg = calculateAverage(numberArray);
console.log("The average is: ",avg);

//9. Write a JavaScript function that takes two parameters and returns their sum.
function sum(param1,param2){
  
  var sum = param1 + param2;
  return sum;
}
var sumResult = sum(5,3);
console.log(sumResult);

//11. You have to capture the returned value from a function and store it in a variable?
function multiply(a, b) {
  return a * b;
}

var result = multiply(4, 6);  
console.log(result);          

//12. Write a function which tells letter counts of (word).
function letterCount(word){
  var counter = 0;
  for(var i=0; i<word.length; i++){
      counter++;
  }
  return counter;
}
var word = letterCount("Emad Ali Khan");
console.log(word);

//13. Write a function to set (year) in date object.
function setYear(year){
var currentDate = new Date();
currentDate.setFullYear(year);
return currentDate;  
}
var yearToSet = setYear(2020);
console.log(yearToSet);

//14. Write a function which tells the age of a person who Born on (dateOfBirth)
function age(dateOfBirth){
  var currentDate = new Date();
  var bornDate = new Date(dateOfBirth);

  var yearDifference = currentDate.getFullYear() - bornDate.getFullYear();
  return yearDifference;
}
var dOB = age('2003-9-13');
console.log(dOB);

//15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']result should be in true or false
function checkWordPresence(word, array) {
  return array.includes(word);
}

var Array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
var word = 'raza';
var isPresent = checkWordPresence(word,Array);
console.log(isPresent);  

//16. Write a function which repeat (letter) 10 times.Hint: "abcde" str.repeat(10)
function repeatLetter (letter , times ){
   return letter.repeat(times);
}
var letterToRepeat = repeatLetter('abcde',10);
console.log(letterToRepeat);

//17. write a function which reverse array = ['a','b','c','d','e']Hint: arr.reverse()
function reverseArray(array) {
  return array.reverse();
}
var originalArray = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(originalArray);
console.log(reversedArray);  
//-------------------------------------------------------------------------------------------------------------------------------


//================================Chapter 38 (Local vs. Global Variables)=========================================================
//1. Write a JavaScript function that demonstrates the usage of a local variable.
function demonstrateLocalVariable() {
  const localVariable = "This is a local variable"; 
  console.log(localVariable); 
}
demonstrateLocalVariable(); 

//2. How can you access a global variable inside a function in JavaScript?
const globalVariable = "This is a global variable"; 

function accessGlobalVariable() {
    console.log(globalVariable); 
}
accessGlobalVariable(); 
//-----------------------------------------------------------------------------------------------------------------------------------

//================================Chapter 39, 40 (Switch Statements)=================================================================

//1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
var day = prompt("Enter the day: ");

switch(day){
  case "sunday":
    console.log("Holiday.");
    break;
  case "saturday":
    console.log("half working day.");
    break;
    default:
      console.log("Working Day.");
      break;
  }

//2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
var cityName = prompt("Enter the cityName: ");
cityName = cityName.toLowerCase();
switch(cityName){

  case "karachi":
    console.log("city Found.");
    break;
  case "lahore":
    console.log("city Found.");
    break;

  case "islamabad":
    console.log("city Found.");
    break;
    default:
      console.log("city Not Found.");
      break;
}