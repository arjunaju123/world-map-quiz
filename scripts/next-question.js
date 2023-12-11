// Retrieve the number of questions from localStorage
const numberOfQuestions = localStorage.getItem("maximumQuestions");
// Initialize question count
let currentQuestionCount = 1;

// Arrow function to display the next question
const nextQuestion = () => {
  // Check if the current question count is less than or equal to the specified number
  if (currentQuestionCount <= numberOfQuestions) {
    //increment the question count
    currentQuestionCount++;
    // Display the next question
    //calling function created by Devapriya
  } else {
    //after last question is reached

    document.getElementById("cardBody").innerHTML = `
                    <h2 class="card-title mb-4">Game Completed!</h2>
                    <p class="card-text">You have completed the game with a score.</p>`;

    // You can calculate the user's score based on their answers and questions attempted
    // For simplicity, let's assume a fixed score here
    const userScore = 0; // Adjust this based on your scoring logic
    //Call the function by Archa to check answer correct or not .If correct increase the userScore by one.

    const userScoreElement = document.getElementById("user-score");
    userScoreElement.textContent = `Your score is: ${userScore}%`;
  }
};
