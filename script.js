// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var masterArray = [];
var passArray = [];
var pickedLower = false;
var pickedUpper = false;
var pickedNumeric = false;
var pickedSpecial = false;
var hasLower = false;
var hasUpper = false;
var hasNumeric = false;
var hasSpecial = false;

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
    var generatePasswordReturn = createPassword(parseInt(length));
    return generatePasswordReturn;
  }

};

function createPassword(passwordLength) {
  passArray = [];
  masterArray = [];
  var lowercase = confirm("Would you like to use lowercase characters in your password?");
  var uppercase = confirm("Would you like to use uppercase characters in your password?");
  var numeric = confirm("Would you like to use numeric characters in your password?");
  var special = confirm("Would you like to use special characters in your password?");

  if (lowercase) {
    masterArray.push(lowercaseArray);
    pickedLower = true;
  };

  if (uppercase) {
    masterArray.push(uppercaseArray);
    pickedUpper = true;
  };

  if (numeric) {
    masterArray.push(numericArray);
    pickedNumeric = true;
  };

  if (special) {
    masterArray.push(specialArray);
    pickedSpecial = true;
  };

  for (var i = 0; i < passwordLength; i++) {

    var masterIndex = Math.floor(Math.random() * masterArray.length);
    passArray.push(masterArray[masterIndex][Math.floor(Math.random() * masterArray[masterIndex].length)]);
  };

  for (var i = 0; i < passArray.length; i++) {
    if (pickedLower && lowercaseArray.includes(passArray[i])) {
      hasLower = true;
    }
    else if (!pickedLower) {
      hasUpper = true;
    }
    else if (pickedUpper && uppercaseArray.includes(passArray[i])) {
      hasUpper = true;
    }
    else if (!pickedUpper) {
      hasUpper = true;
    }
    else if (pickedNumeric && numericArray.includes(passArray[i])) {
      hasNumeric = true;
    }
    else if (!pickedNumeric) {
      hasNumeric = true;
    }
    else if (pickedSpecial && specialArray.includes(passArray[i])) {
      hasSpecial = true;
    }
    else if (!pickedSpecial) {
      hasSpecial = true;
    };
    if (hasLower && hasUpper && hasNumeric && hasSpecial) {
      var passFinal = passArray.join("");
      return passFinal;
    } else {
      passwordRerun(passwordLength);
    };
  };
};

function passwordRerun(passwordLength) {

  passArray = [];
  for (var i = 0; i < passwordLength; i++) {

    var masterIndex = Math.floor(Math.random() * masterArray.length);
    passArray.push(masterArray[masterIndex][Math.floor(Math.random() * masterArray[masterIndex].length)]);
  };
  for (var i = 0; i < passArray.length; i++) {
    if (pickedLower && lowercaseArray.includes(passArray[i])) {
      hasLower = true;
    }
    else if (!pickedLower) {
      hasUpper = true;
    }
    else if (pickedUpper && uppercaseArray.includes(passArray[i])) {
      hasUpper = true;
    }
    else if (!pickedUpper) {
      hasUpper = true;
    }
    else if (pickedNumeric && numericArray.includes(passArray[i])) {
      hasNumeric = true;
    }
    else if (!pickedNumeric) {
      hasNumeric = true;
    }
    else if (pickedSpecial && specialArray.includes(passArray[i])) {
      hasSpecial = true;
    }
    else if (!pickedSpecial) {
      hasSpecial = true;
    };
    if (hasLower && hasUpper && hasNumeric && hasSpecial) {
      var passFinal = passArray.join("");
      return passFinal;
    } else {
      passwordRerun(passwordLength);
    };
  };



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
