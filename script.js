// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
  // Get the display element by its ID
  const display = document.getElementById('display');

  // Function to append a value to the display
  function appendToDisplay(value) {
      display.value += value;// Append the value to the display
  }

  
    // Function to clear the display
  function clearDisplay() {
      display.value = '';// Set the display value to an empty string
  }

   // Function to calculate the result
  function calculate() {
      try {
          let result = eval(display.value);// Evaluate the expression in the display
          display.value = result;// Display the result
      } catch (error) {
          display.value = 'Error';// Display "Error" if there's an error in the expression
      }
  }

  // Function to calculate the modulo (%) of a number
  function calculateModulo() {
      try {
          let result = eval(display.value);
          result %= 1; // Get the modulo value
          display.value = result;// Display the modulo value
      } catch (error) {
          display.value = 'Error'; // Display "Error" if there's an error in the expression
      }
  }

  // Function to calculate the square (^2) of a number
  function calculateSquare() {
      try {
          let result = eval(display.value);
          result *= result; // Square the value
          display.value = result;// Display the squared value
      } catch (error) {
          display.value = 'Error';// Display "Error" if there's an error in the expression
      }
  }

  // Get all calculator buttons
  const buttons = document.querySelectorAll('.calculator-btn');
  
  // Add event listeners to each button
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const value = button.value;// Get the value of the clicked button

           // Perform actions based on the button value
          if (value === 'AC') {
              clearDisplay();// Clear the display if AC button is clicked
          } else if (value === '=') {
              calculate();// Calculate the result if = button is clicked
          } else if (value === '%') {
              calculateModulo();// Calculate modulo if % button is clicked
          } else if (value === '^2') {
              calculateSquare();// Calculate square if ^2 button is clicked
          } else if (value === '←') {
              display.value = display.value.slice(0, -1); // Remove last character (backspace)
          } else {
              appendToDisplay(value);// Append the button value to the display
          }
      });
  });
});
