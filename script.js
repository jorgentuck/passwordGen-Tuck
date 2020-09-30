// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var masterArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How many characters would you like the password to be?\nPlease pick a number between 8 and 128");



  if (isNaN(length)) {
    alert("Please choose a number");
    generatePassword();
  } else if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert("Please choose a number between 8 and 128. You chose " + length);
    generatePassword();
  } else {
    createPassword(parseInt(length));
  }

};

function createPassword(passwordLength){
  var lowercase = confirm("Would you like to use lowercase characters in your password?");
  var uppercase = confirm("Would you like to use uppercase characters in your password?");
  var numeric = confirm("Would you like to use numeric characters in your password?");
  var special = confirm("Would you like to use special characters in your password?");

  if(lowercase){
    masterArray.push(lowercaseArray);
    console.log(masterArray);
  }

  if(uppercase){
    masterArray.push(uppercaseArray);
    console.log(masterArray);
  }

  if(numeric){
    masterArray.push(numericArray);
    console.log(masterArray);
  }

  if(special){
    masterArray.push(specialArray);
    console.log(masterArray);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
