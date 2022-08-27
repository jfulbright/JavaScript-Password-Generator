
// Assigns DOM location of Form fields and Button as variables. 
var generateBtn = document.querySelector("#generate");
var passwordLengthUserInput = document.querySelector("#passwordLength");

// Declare alpha, numeric and special character arrays
const specialCharSet = ['!', '"', '#', '$', '%', '&', '\'', '(', '\'', ')', '*', '+', ',' , '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", '\]',  '^', '_', '`', '{', '|', '}', '~', ']', ];
const numericSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaUpperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaLowerCaseSet = alphaUpperCaseSet.map(Element => {
  return Element.toLowerCase();
});


// Declare userInputs values to be used as arguments in password function
var isSpecialChar = true;
var isNumeric = true;
var isMixedCase = true;

// Add event listener to the button that invokes 'writePassword' function when clicked.
generateBtn.addEventListener("click", writePassword);

// Display generated password value in the form's text field
function writePassword() {
  var passwordLength = passwordLengthUserInput.value; //on button click, save password length value to this variable
  var password = generateRandomPassword(passwordLength); //invokes random password function and passes passwordLength value as an argument. Returns random password from special chars function
  var passwordText = document.querySelector("#password"); //stores location of password textarea in variable "textarea#password"
  passwordText.value = password; //sets the password value returned from "generatePassword" function to the password textarea
}


// Generate random special chars based. Arguments include Password Length, Include lowercase, uppercase, numeric, and/or special characters
function  generateRandomPassword (l) {
  var passwordArray = []; // create an empty array
  
  for (let i = 0; i < l; i++) {
    var index = Math.floor(Math.random() * alphabetUpperCaseSet.length); // creates random index of special characters array for each loop
    passwordArray.push(alphabetUpperCaseSet[index]); // pushes value of random index into the password array
  }
  let password = passwordArray.join('');
  console.log(password);
  return password;

}


// Argument Logic:
// if specialCharSet = true then concatinate array and run for loop;
// else 
// 






//TODO List:


// Write logic for userInput CharType
// How to combine multiple arrays into one ("if user selects input concatinate arrays")
// Wireup to HTML form


// Error Handling
// Password length check: onblur, value must be >= 8 && <=128