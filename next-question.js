// Retrieve the number of questions from localStorage
// const numberOfQuestions = parseInt(localStorage.getItem("numberOfQuestions"));

const {numberOfQuestions} = getUserData();

// Initialize question count
let currentQuestionCount = -1;

let userScore = 0;

// Arrow function to display the next question
const nextQuestion = () => {

  document.getElementById('result').innerHTML = '';

  document.getElementById("image-map-container-id").style="pointer-events: auto"


  // Check if the current question count is less than or equal to the specified number
  if (currentQuestionCount < numberOfQuestions-1) {
    //increment the question count
    currentQuestionCount++;
    // Display the next question
    //calling function created by Devapriya
    changeQuestion();
  } else {
    //after last question is reached

    document.getElementById("cardBody").innerHTML = `
                    <h2 class="card-title mb-4">Game Completed!</h2>
                    <p class="card-text">You have completed the game with a score ${userScore}</p>`;

    // You can calculate the user's score based on their answers and questions attempted
    // For simplicity, let's assume a fixed score here
    // userScore = 0; // Adjust this based on your scoring logic
    //Call the function by Archa to check answer correct or not .If correct increase the userScore by one.


    // const userScoreElement = document.getElementById("user-score");
    // userScoreElement.textContent = `Your score is: ${userScore}%`;


    // const userScoreElement = document.getElementById("user-score");
    // userScoreElement.textContent = `Your score is: ${userScore}%`;

  }
};

nextQuestion();


// game.js - Archa

const answers=[
  "Asia", 
  "Asia", 
  "Australia",
  "Australia",
  "Asia", 
  "Africa", 
  "Europe", 
  "Africa", 
  "North America", 
  "South America"
];
  
  // let currentQuestion = 0;         
  // let score = 0;
  
  const checkAnswer = (clickedContinent) =>  {
    console.log("Check Answer Called")
      const correctAnswer = answers[currentQuestionCount];
  
      console.log("Correct Answer: ", correctAnswer)
      if (clickedContinent == correctAnswer) {    
        console.log("Entered Inside if")
          userScore++;
          document.getElementById('result').innerHTML = '<strong>Correct Answer</strong>';
        }//to print statement in the div with id result
          else {
              document.getElementById('result').innerHTML = 'Wrong Answer';;
          }

          document.getElementById("image-map-container-id").style="pointer-events: none"
      }
  
