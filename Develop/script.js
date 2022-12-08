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

//prompt windows for password criteria
  if (length < 8 || length > 128) {
    alert('Password must be between 8 and 128 characters.');
    return generatePassword();
  } else {
    var addUpper = confirm('Should password include uppercase letters?');
    var addLower = confirm('Should password include lowercase letters?');
    var addNumber = confirm('Should password include numbers?');
    var addSpecialCharacter = confirm('Should password include special characters?');
  }

  //if confirmations are declined
  if (!addUpper && !addNumber && !addLower && !addSpecialCharacter) {
    alert('Your password should use at least one criteria to generate.');
    generatePassword();
  }

  var passwordName = []
    if (addUpper) {passwordName = passwordName.concat(upper)}
    if (addLower) {passwordName = passwordName.concat(lower)}
    if (addNumber) {passwordName = passwordName.concat(number)}
    if (addSpecialCharacter) {passwordName = passwordName.concat(specialCharacter)}
  
  var randomPassword = ''
    for (var i=0; i < length; i++) {
      randomPassword = randomPassword + passwordName[Math.floor(Math.random() * passwordName.length)];
    }

    return randomPassword;
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
