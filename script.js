// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Array of lowercase letters to use in passwords
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Array of uppercase letters to use in passwords
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Array of numbers to use in passwords
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; //Array of special characters to use in passwords
var masterArray = []; //To hold the arrays of selected characters types
var passArray = []; //array that I fill from the sub arrays in the master array to turn into a string
var pickedLower = false; //bool to track what types of charaters are selected by the user
var pickedUpper = false; //bool to track what types of charaters are selected by the user
var pickedNumeric = false; //bool to track what types of charaters are selected by the user
var pickedSpecial = false; //bool to track what types of charaters are selected by the user
var hasLower = false; //bool to track what types of charaters are in the passArray
var hasUpper = false; //bool to track what types of charaters are in the passArray
var hasNumeric = false; //bool to track what types of charaters are in the passArray
var hasSpecial = false; //bool to track what types of charaters are in the passArray

// Write password to the #password input
function writePassword() {
  var password = lengthPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Prompt for the length of the desired password and some input checks
function lengthPrompt() {
  var length = prompt("How many characters would you like the password to be?\nPlease pick a number between 8 and 128");
  if (length === null) {
    return "";
  } else if (isNaN(length)) {
    alert("Please choose a number");
    lengthPrompt();
  } else if (!Number.isInteger(parseFloat(length))) {
    alert("Please pick a whole number");
    lengthPrompt();
  } else if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert("Please choose a number between 8 and 128. You chose " + length);
    lengthPrompt();
  } else {
    var generatePasswordReturn = passPrompts(parseInt(length));
    return generatePasswordReturn;
  }
};

// Prompts for what type of characters for the password is wanted
function passPrompts(passwordLength) {
  passArray = [];
  masterArray = [];
  var lowercase = confirm("Would you like to use lowercase characters in your password?");
  var uppercase = confirm("Would you like to use uppercase characters in your password?");
  var numeric = confirm("Would you like to use numeric characters in your password?");
  var special = confirm("Would you like to use special characters in your password?");

  // updates master array and bool
  if (lowercase) {
    masterArray.push(lowercaseArray);
    pickedLower = true;
  };

  // updates master array and bool
  if (uppercase) {
    masterArray.push(uppercaseArray);
    pickedUpper = true;
  };

  // updates master array and bool
  if (numeric) {
    masterArray.push(numericArray);
    pickedNumeric = true;
  };

  // updates master array and bool
  if (special) {
    masterArray.push(specialArray);
    pickedSpecial = true;
  };
  if (!pickedLower && !pickedUpper && !pickedNumeric && !pickedSpecial) {
    alert("Please pick at least 1 option, preferablly more than one");
    passPrompts(passwordLength);
  } else {
    var generatePasswordReturn = generatePasswordArray(passwordLength);
    return generatePasswordReturn;
  };
};

// Generates a random password
function generatePasswordArray(passwordLength) {
  for (var i = 0; i < passwordLength; i++) {

    var masterIndex = Math.floor(Math.random() * masterArray.length);
    passArray.push(masterArray[masterIndex][Math.floor(Math.random() * masterArray[masterIndex].length)]);
  };
  var generatePasswordReturn = errorCheckPassword(passwordLength);
  return generatePasswordReturn;
};


// Checks to confirm password matches users choices and re-runs generatePasswordArray if it does not
function errorCheckPassword(passwordLength) {
  for (var i = 0; i < passArray.length; i++) {
    if (pickedLower && lowercaseArray.includes(passArray[i])) {
      hasLower = true;
    }
    else if (!pickedLower) {
      hasLower = true;
    };

    if (pickedUpper && uppercaseArray.includes(passArray[i])) {
      hasUpper = true;
    }
    else if (!pickedUpper) {
      hasUpper = true;
    };

    if (pickedNumeric && numericArray.includes(passArray[i])) {
      hasNumeric = true;
    }
    else if (!pickedNumeric) {
      hasNumeric = true;
    };

    if (pickedSpecial && specialArray.includes(passArray[i])) {
      hasSpecial = true;
    }
    else if (!pickedSpecial) {
      hasSpecial = true;
    };
  };
  if (hasLower && hasUpper && hasNumeric && hasSpecial) {
    var passFinal = passArray.join("");
    return passFinal;
  } else {
    varReset();
    generatePasswordArray(passwordLength);
  };
};

// resets error checking bools if password does not match criteria
function varReset() {
  hasLower = false;
  hasUpper = false;
  hasNumeric = false;
  hasSpecial = false;
  passArray = [];
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
