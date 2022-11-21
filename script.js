// Assignment Code
var create = document.querySelector("#generate");
var characterAmount = 8

// Write password to the #password input
function writePassword() {
   var passwordText = document.querySelector("#password");
   passwordText.value = password;

  var input = window.prompt("how many characters do you want in your password? (8-128)");
  console.log(input);
  if (!input){
    return;
  }

  else if (input != characterAmount){
      var upperCase = window.prompt("would you like to have an upper case letter?")
  };
  console.log (upperCase);
  if (!upperCase){
    return;
  }

  else if (upperCase = true){
    var numbers = window.prompt("would you like to add any numbers?")
  };
  console.log(numbers);
  if (!numbers){
    return;
  }

  else if (numbers = true){
    var spec= window.prompt("would you like to include any special characters?")
  };
  console.log(spec);
  if (!spec){
    return;
  }


};
 


// Add event listener to generate button
create.addEventListener("click", writePassword);
