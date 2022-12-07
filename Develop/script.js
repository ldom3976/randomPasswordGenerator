// Assignment code here

//defining variables
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacter = ["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var addNumber;
var addSpecialCharacter;
var addUpper;
var addLower;
var length = '';

//added generate function and length
function generatePassword() {
  var length = prompt('How many characters would you like your password to be? (Between 8 and 128.)')

  if (length < 8 || length > 128) {
    alert('Password must be between 8 and 128 characters.');
    return generatePassword();
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
