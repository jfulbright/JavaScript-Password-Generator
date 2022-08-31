
// Assigns DOM location of Form fields and Button as variables. 
var generateBtn = document.querySelector("#generate");
var passwordLengthUserInput = document.querySelector("#passwordLength");

// Declare character type arrays for alpha, numeric and special characters
const specialCharSet = ['!', '"', '#', '$', '%', '&', '\'', '(', '\'', ')', '*', '+', ',' , '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", '\]',  '^', '_', '`', '{', '|', '}', '~', ']', ];
const numericSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaUpperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaLowerCaseSet = alphaUpperCaseSet.map(Element => {
  return Element.toLowerCase();
});


// Add event listener to the button that invokes 'writePassword' function when clicked.
generateBtn.addEventListener("click", userInputConditions);

// Prompt user for Character Type preferences and display a generated password value in form's text field
function userInputConditions() {
var passwordLength = window.prompt("Select Password Length between 8 and 128");
 
  if  (!passwordLength) {
      // If user pressed Cancel, immediately end function
        return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert(`You entered ${passwordLength}. Please enter a valid password length between 8 and 128.`);
    } else {
      var isSpecialChar = window.confirm("Include Special Characters?");
        console.log(`Special Characters = ${isSpecialChar}`);
      var isNumeric = window.confirm("Include Numbers?");
        console.log(`Numeric Characters = ${isNumeric}`);
      var isUpperCase = window.confirm("Include Uppercase Characters?");
        console.log(`Uppercase Characters = ${isUpperCase}`);
      var isLowerCase = window.confirm("Include Lowercase Characters?");
        console.log(`Lowercase Characters = ${isLowerCase}`);
      
    // validate condition where one character type must be selected
    if (isSpecialChar === false && isNumeric === false && isUpperCase === false && isLowerCase === false ) {
      alert(`You must select at least one character type. Please try again.
      \n You selected:
      \n Special Characters = ${isSpecialChar}
      \n Numeric Characters = ${isNumeric}
      \n Uppercase Characters = ${isUpperCase}
      \n Lowercase Characters = ${isLowerCase}
      `);
      return;
    }
    
    var password = generateRandomPassword(passwordLength, isSpecialChar, isNumeric, isUpperCase, isLowerCase); //invokes random password function and passes user preferences as arguments. Returns random password from special chars function
    var passwordText = document.querySelector("#password"); //stores location of password textarea in variable "textarea#password"
    passwordText.value = password; //sets the password value returned from "generatePassword" function to the password textarea
    }
}


// This funciton generates a password with random special chars based on arguments (Password Length, lowercase, uppercase, numeric, and/or special characters)
function  generateRandomPassword (passwordLength, isSpecialChar, isNumeric, isUpperCase, isLowerCase) { 
  
  // Build the final password array based on user input conditions
    var finalArray = []; // declare an empty array

            if (isSpecialChar === true) {
                finalArray = specialCharSet;
                console.log("show me the specialChars")
                console.log(finalArray);
                
            } 
            if (isNumeric === true) {
                finalArray = finalArray.concat(numericSet);
                console.log("show me the numbers")
                console.log(finalArray);
              }
            if (isUpperCase === true) {
              finalArray = finalArray.concat(alphaUpperCaseSet);
              console.log("show me the UpperCase")
                console.log(finalArray);
              }
            if (isLowerCase === true) {
              finalArray = finalArray.concat(alphaLowerCaseSet);
              console.log("show me the LowerCase")
                console.log(finalArray);
            }
            console.log(finalArray);

  
  var passwordArray = []; // Declare an empty array to store random password characters
  
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * finalArray.length); // creates random index of special characters array for each loop
    passwordArray.push(finalArray[index]); // pushes value of random index into the password array
  }
  let password = passwordArray.join(''); //concatinates array elements into a sting with no delimeters
  console.log(password);
  return password;

}





