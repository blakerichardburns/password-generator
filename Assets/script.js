// var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var numCharacters = prompt("How long would you like your password? (Minimum 8 Characters / Maximum 128 Characters)");
  if (numCharacters > 7 && < 129) {

  } else {

  }

  var upperCase = prompt("Include UPPERCASE letters? (Yes or No)");
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  if (upperCase = "Yes" || "yes" || "YES" || "Y" || "y") {

  } if else (upperCase = "No" || "no" || "NO" || "N" || "n") {
    
  } else {

  };
  
  var lowerCase = prompt("Include lowercase letters? (Yes or No)");
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  if (lowerCase = "Yes" || "yes" || "YES" || "Y" || "y") {

  } if else (lowerCase = "No" || "no" || "NO" || "N" || "n") {
    
  } else {
    
  };


  var numbers = prompt("Include numbers? (Yes or No)");
  var numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  if (numbers = "Yes" || "yes" || "YES" || "Y" || "y") {

  } if else (numbers = "No" || "no" || "NO" || "N" || "n") {
    
  } else {
    
  };

  var special = prompt("Include special characters? (Yes or No)");
  var specialCharacters = [“!”, “"”, “#”, “$”, “%”, “&”, “'”, “(”, “)”, “*”, “+”, “,”, “-”, “.”, “/”, “:”, “;”, “<”, “=”, “>”, “?”, “@”, “[”, “\”, “]”, “^”, “_”, “`”, “{”, “|”, “}”, “~”]
  if (special = "Yes" || "yes" || "YES" || "Y" || "y") {

  } if else (special = "No" || "no" || "NO" || "N" || "n") {
    
  } else {
    
  };

  return "upperCase + lowerCase + numbers + special";
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// generateBtn.addEventListener("click", writePassword);