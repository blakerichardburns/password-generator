var generateBtn = document.querySelector("#generate");
var passwordParameters = {
  numberOfCharacters: 10,
  lowercaseLetters: true,
  uppercaseLetters: true,
  numbers: true,
  specialCharacters: true,
};

function generatePassword() {
  promptsForUser();

  while (!validatePasswordParameters()) {
    alert(
      "You have chosen NO to Uppercase Letters, Lowercase Letters, Numbers, and Special Characters. There are no available characters to generate your password..."
    );
    promptsForUser();
  }

  var shinyNewPassword = "";
  var availableCharacterOptions = generateAvailableCharacterOptions();
  for (var i = 0; i < passwordParameters.numberOfCharacters; i++) {
    shinyNewPassword += randomCharacterGenerator(availableCharacterOptions);
  }

  return shinyNewPassword;
}

function selectNumberOfCharacters() {
  var numberOfCharacters = prompt(
    "How long would you like your password? (Minimum 8 Characters / Maximum 128 Characters)"
  );

  if (
    numberOfCharacters === null ||
    isNaN(numberOfCharacters) ||
    numberOfCharacters < 8 ||
    numberOfCharacters > 128
  ) {
    alert("Please enter a number from 8 to 128...");
    selectNumberOfCharacters();
  }

  return numberOfCharacters;
}

function promptsForUser() {
  passwordParameters.numberOfCharacters = selectNumberOfCharacters();
  passwordParameters.uppercaseLetters = confirm(
    "Include Uppercase Letters?     OK = YES / Cancel = NO"
  );
  passwordParameters.lowercaseLetters = confirm(
    "Include Lowercase Letters?     OK = YES / Cancel = NO"
  );
  passwordParameters.numbers = confirm(
    "Include Numbers?     OK = YES / Cancel = NO"
  );
  passwordParameters.specialCharacters = confirm(
    "Include Special Characters?     OK = YES / Cancel = NO"
  );
}

function validatePasswordParameters() {
  return (
    passwordParameters.lowercaseLetters ||
    passwordParameters.uppercaseLetters ||
    passwordParameters.numbers ||
    passwordParameters.specialCharacters
  );
}

function generateAvailableCharacterOptions() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "0123456789".split("");
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

  var availableCharacterOptionsArray = [];

  if (passwordParameters.lowercaseLetters) {
    availableCharacterOptionsArray =
      availableCharacterOptionsArray.concat(lowercaseLetters);
  }

  if (passwordParameters.uppercaseLetters) {
    availableCharacterOptionsArray =
      availableCharacterOptionsArray.concat(uppercaseLetters);
  }

  if (passwordParameters.numbers) {
    availableCharacterOptionsArray =
      availableCharacterOptionsArray.concat(numbers);
  }

  if (passwordParameters.specialCharacters) {
    availableCharacterOptionsArray =
      availableCharacterOptionsArray.concat(specialCharacters);
  }

  return availableCharacterOptionsArray;
}

function randomCharacterGenerator(characterArray) {
  return characterArray[Math.floor(Math.random() * characterArray.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
