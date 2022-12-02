// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase;
var upperCaseChars;
var lowercase;
var lowerCaseChars;
var numeric;
var numericChars;
var special;
var specialChars;
var passwordLength;
var characterSet;
var returnVal;

// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This function will get password length.
function getPasswordLength(){
  passwordLength = parseInt(window.prompt("How many characters should the password have?(8-128)"));

  if (Number.isNaN(passwordLength)) {
    var tryAgain = window.confirm("Password length invalid.  Try again?");
    if (tryAgain){
      generatePassword();
    } else {
      return;
    }    
  } else if (passwordLength < 8){
      var tryAgain = window.confirm("Password length too short.  Try again?");
      if (tryAgain){
        generatePassword();
      } else {
        return;
      }
    } else if (passwordLength > 128) {
      var tryAgain = window.confirm("Password length too long.  Try again?");
      if (tryAgain){
        generatePassword();
      } else {
        return;
      }    
    } 
      else {
      getPasswordCharTypes();
    };

};

// This function is to gather information about lowercase, uppercase, numbers, and special character to include in password
function getPasswordCharTypes(){

  lowercase = window.confirm("Would you like lowercase characters? (Cancel for no)");
  if (lowercase) {
    lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerCaseChars = "";
  }

  uppercase = window.confirm("Would you like uppercase characters? (Cancel for no)");
  if (uppercase) {
    upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperCaseChars = "";
  }  

  numeric = window.confirm("Would you like numeric values? (Cancel for no)");
  if (numeric) {
    numericChars = "0123456789";
  } else {
    numericChars = "";
  }  

  special = window.confirm("Would you like special characters? (Cancel for no)");
  if (special) {
    specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else {
    specialChars = "";
  }  

  if (lowercase == false && uppercaseYN == false && numericYN == false && specialYN == false){
    var tryAgain = window.confirm("At least one character type must be selected.  Retry character type selection?");
    if (tryAgain){
      getPasswordCharTypes();
    } else {
      return;
    }  
  }

  return;
};

//this function will create your new password with all of your input!
function buildPassword() {
  length = passwordLength;
  characterSet = "";
  returnVal = "";

  characterSet = lowerCaseChars + upperCaseChars + numericChars + specialChars;

  for (var i = 0, n = characterSet.length; i < length; ++i) {
    returnVal = returnVal + characterSet.charAt(Math.floor(Math.random() * n));
  }

}

function generatePassword(){

  getPasswordLength();
  buildPassword();

  return returnVal;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);