
/*
1. First, I'll create a string and attach it to the constant variable 'msg' to keep it from being changed and to make the alert easier.
2. Secondly, I'll create three more variables with equations at the end where all answers will add up to their respective number (10 / 40 / 39)
3. Lastly, I'll use all the variables to create an entire message inside of an alert using '-' inbetween the equations to make it look like an actual code. 
*/

const msg = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: " // Step One: Create the message in a string.

const num1 = 15 - 5; // Step Two: Create the equations that relate to the required numbers for the overall code.
const num2 = 10 * 4;
const num3 = 25 + 14;

alert(`${msg} ${num1} - ${num2} - ${num3}`); // Step Three: Create the alert message with the original message and numerical combination.
