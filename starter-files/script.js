// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


document.addEventListener('DOMContentLoaded', function()) {
    const fetchButton = document.getElementById('button');
    const questionInput = document.getElementById('question');
    const answerDiv = document.getElementById('answer');
  
    fetchButton.addEventListener('click', fetchAnswer);
  
    function fetchAnswer() {
      // Limpiar la respuesta anterior y la pregunta
      answerDiv.textContent = '';
      questionInput.value = '';
  
      // Realizar la petición al API
      fetch('https://yesno.wtf/api')

  };