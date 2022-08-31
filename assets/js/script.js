
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


// Add event listener to the button that invokes 'writePassword' function when clicked.
generateBtn.addEventListener("click", userInputConditions);

// Prompt user for Character Type preferences and display a generated password value in the form's text field
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
    

  console.log("conditions passed")
    var password = generateRandomPassword(passwordLength, isSpecialChar, isNumeric, isUpperCase, isLowerCase); //invokes random password function and passes passwordLength value as an argument. Returns random password from special chars function
    var passwordText = document.querySelector("#password"); //stores location of password textarea in variable "textarea#password"
    passwordText.value = password; //sets the password value returned from "generatePassword" function to the password textarea
    }
}


// This funciton generates a password random special chars based. Arguments include Password Length, Include lowercase, uppercase, numeric, and/or special characters
function  generateRandomPassword (passwordLength, isSpecialChar, isNumeric, isUpperCase, isLowerCase) {
  console.log(passwordLength, isSpecialChar, isNumeric, isUpperCase, isLowerCase);
 
  
  // Build the final password array based on user input conditions
      
  
    // Solution #1: If then conditions to concatinate
    var finalArray = []; // declare an empty array

            if (isSpecialChar === true) {
                finalArray = specialCharSet;
                
            } else 
            if (isNumeric === true) {
                finalArray.concat(numericSet);
                console.log("show me the numbers")
              }
            if (isUpperCase === true) {
              finalArray.concat(alphaUpperCaseSet);
            
              }
            if (isLowerCase === true) {
              finalArray.concat(alphaLowerCaseSet);
              
            }
            console.log(finalArray);


       
  
  
  
  // This works for one array
  var passwordArray = []; // create an empty array
  
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * alphaUpperCaseSet.length); // creates random index of special characters array for each loop
    passwordArray.push(alphaUpperCaseSet[index]); // pushes value of random index into the password array
  }
  let password = passwordArray.join(''); //concatinates array elements into a sting with no delimeters
  console.log(password);
  return password;

}


// Options:
// 1. Create an array of of character sets that are true & concat them into new array
//      Blocker: Can't use if statements to add charsets to an array
//      Solutions: 
//        1. Helper function
//        2. Callback function - FAIL
//        3. Nested funcion
//        4. For loops
//        5. Array filter - FAIL





