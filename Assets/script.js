var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possibleCharacters = []

  var numCharacters = prompt("How long would you like your password? (Minimum 8 Characters / Maximum 128 Characters)");
  if (numCharacters < 8 || numCharacters > 128) {
    alert("Please enter a number from 8 to 128...");
    return
  } else if (isNaN(numCharacters)) {
    alert("Please enter a number...");
    return
  }

  var upperCaseQuery = confirm("Include Uppercase Letters?     OK = YES / Cancel = NO");
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  if (upperCaseQuery === true) {
    possibleCharacters.push(upperCase);
  }

  var lowerCaseQuery = confirm("Include Lowercase Letters?     OK = YES / Cancel = NO");
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (lowerCaseQuery === true) {
    possibleCharacters.push(lowerCase);
  }

  var numberQuery = confirm("Include Numbers?     OK = YES / Cancel = NO");
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  if (numberQuery === true) {
    possibleCharacters.push(numbers);
  }

  var specialQuery = confirm("Include Special Characters?     OK = YES / Cancel = NO");
  var specialCharacters = ["!", "“", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  if (specialQuery === true) {
    possibleCharacters.push(specialCharacters);
  }

  if (possibleCharacters.length === 0) {
    alert("You have chosen NO to Uppercase Letters, Lowercase Letters, Numbers, and Special Characters. We have no available characters to generate your password...");
    return
  }

  var shinyNewPassword = ""
  for (var i = 0; i < numCharacters; i++) {
    shinyNewPassword += possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)];
  }
  // return shinyNewPassword
  console.log(shinyNewPassword);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);