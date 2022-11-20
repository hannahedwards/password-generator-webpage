// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password.window.prompt()
  
  
}
function prompt()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
generateBtn.addEventListener( window.prompt('what kind of password'))
