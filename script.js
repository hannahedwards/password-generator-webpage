// Assignment Code
var create = document.querySelector("#generate");
var characterAmount = 10;

// Write password to the #password input
function writePassword() {
  //  var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;

  var input = window.prompt("how many characters do you want in your password? (8-128)");
  console.log(input);

  if (input = characterAmount){
      var upperCase = window.prompt("would you like to have an upper case letter?")
  };
  console.log (upperCase);

  if (upperCase = true){
    var numbers = window.prompt("would you like to add any numbers?")
  };
  console.log(numbers);

  if (numbers = true){
    var spec= window.prompt("would you like to include any special characters?")
  };
  console.log(spec);


window.alert("your new password!" + password)

};
 


// Add event listener to generate button
create.addEventListener("click", writePassword);
