
// Assignment Code: Locates the button with class #generate". Creates a variable and stores the button object's class and id values "button#generate.btn". This is used to add an event listener on the button click event.
var generateBtn = document.querySelector("#generate");
  // Declare userInputs variables
  var isSpecialChar = true;
  var isNumeric = true;
  var isMixedCase = true;
  var passwordLength = 8;


// Write password to the #password input
function writePassword() {
  var password = generateRandomPassword(); //returns random password from special chars function
  var passwordText = document.querySelector("#password"); //stores location of password textarea in variable "textarea#password"

  passwordText.value = password; //sets the password value returned from "generatePassword" function to the password textarea

}

// Add event listener to the button that invokes the 'writePassword' function when clicked.
generateBtn.addEventListener("click", writePassword);
// TODO: add EventListeners for UserInputs






// TODO: Store userInput in variables

// Declare alpha, numeric and special character password arrays
const specialCharSet = ['!', '"', '#', '$', '%', '&', '\'', '(', '\'', ')', '*', '+', ',' , '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", '\]',  '^', '_', '`', '{', '|', '}', '~', ']', ];
const alphabetSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]





// Returns RANDOM multiple special chars (Works)
function  generateRandomPassword () {
  var passwordArray = []; // create an empty array
  
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * specialCharSet.length); // creates random index of special characters array for each loop
    passwordArray.push(specialCharSet[index]); // pushes value of random index into the password array
  }
  let password = passwordArray.join('');
  console.log(password);
  return password;

}








//TODO List:
// 1. Generate random chars based in userInput
// 2. Wireup to HTML Form

// 3. Write logic for userInput CharType
//    3.a How to combine multiple arrays into one ("if user selects input concatinate arrays")
// 4. Wireup to HTML form