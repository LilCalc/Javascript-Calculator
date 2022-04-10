//Possible inputs for password
function generatePassword() {
    var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
    var capitalCharacters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var allCharacters = [];
//Check for desired characters
numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }
includeLowercase = confirm("Will the password have lowercase letters?");
if (includeLowercase) {
    var changeToLowercase = alert("The password will have lowercase letters");
}
else {
    alert("The password won't have lowercase letters.");
}
includeUppercase = confirm("Will the password have uppercase letters?");
if(includeUppercase) {
    alert("The password will inclue uppercase letters.");
}
else {
    alert("The password will NOT include uppercase letters.");
}
includeNumbers = confirm("Will the password include numbers?");
if(includeNumbers) {
    alert("The password will include numbers");
}
else {
    alert("The password will NOT include numbers");
}
includeSpecialCharacters = confirm("Will the password include special characters?");
if(includeSpecialCharacters) {
    alert("The password will include special characters");
}
else {
    alert("The password will NOT include special characters");
}
//check if any characters have been selected
if(includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecialCharacters === false) {
    return("Please select a character.");
}
//Connect possible characters
if(includeLowercase) {
    allCharacters = allCharacters.concat(lowerCharacters);
}
if(includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
}
if(includeNumbers) {
    allCharacters = allCharacters.concat(numberCharacters);
}
if(includeUppercase) {
    allCharacters = allCharacters.concat(capitalCharacters);
}
//Choose randomly from variables in order to create password length
let fPassword = " "
for (let i = 0; i < numberOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * allCharacters.length)];
    fPassword = fPassword + allCharacters[rng];
}
return fPassword;
};
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