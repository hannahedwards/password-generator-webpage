// Assignment Code
var create = document.querySelector("#generate");
var characterAmount = 8-128;
var addNumber = true;

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var input = window.prompt("how many characters do you want in your password? (8-128)");
  if (input != characterAmount){
    window.prompt("would you like to add a number?")

  if (addNumber = true){
    window.prompt("would you like to add special charaters?")
  }

  } 

 

}

// Add event listener to generate button
create.addEventListener("click", writePassword);
