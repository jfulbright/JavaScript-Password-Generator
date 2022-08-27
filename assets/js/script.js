// This code calls the writePassword function when button is clicked.

// Assignment Code: Locates the button with class #generate". Creates a variable and stores the button object's class and id values "button#generate.btn". This is used to add an event listener on the button click event.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //returns password from function that I need to write
  var passwordText = document.querySelector("#password"); //stores location of password textarea in variable "textarea#password"

  passwordText.value = password; //sets the password value returned from "generatePassword" function to the password textarea

}

// Add event listener to the button that invokes the 'writePassword' function when clicked.
generateBtn.addEventListener("click", writePassword);



// Declare alpha, numeric and special character password arrays
const specialCharSet = ['!', '"', '#', '$', '%', '&', '\'', '(', '\'', ')', '*', '+', ',' , '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", '\]',  '^', '_', '`', '{', '|', '}', '~', ']', ];
const alphabetSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



 // this funciton is invoked from writePassord function. It generates a password from arrays and returns value to writePassword funciton, which is stored in the "password" variable
function generatePassword () {
  index = randomIndexSpecialChar (); // invokes function and sets return value as a var
  console.log(index);
  return index; 
  
}


function randomIndexSpecialChar () {
 var index = Math.floor(Math.random() * specialCharSet.length);
 var randomSpecial = specialCharSet[index];
 return randomSpecial;
}
