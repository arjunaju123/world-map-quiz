// Retrieve the number of questions from localStorage
// const numberOfQuestions = parseInt(localStorage.getItem("numberOfQuestions"));

const {numberOfQuestions, username} = getUserData();

// Initialize question count
let currentQuestionCount = -1;

let userScore = 0;
let scorePercentage = 0;

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

    scorePercentage = (userScore / numberOfQuestions) * 100;
    // document.getElementById("cardBody").innerHTML = `
    //   <h2 class="card-title mb-5">Game Completed!</h2>
    //   <p class="card-text">You have completed the game with a score ${userScore}</p>
    //   <div><img src="assets/animated_gif.gif" alt="Animated GIF" style="width: 300px; height: auto;"></div>`;

    if(scorePercentage<50){
      // Assuming userScore and percentage are variables with the respective values

      scorePercentage = (userScore / numberOfQuestions) * 100;
   
      
                //   <div style="position: absolute; top: 50%; left: 20px; transform: translate(-50%, -50%);">
                //     <img src="assets/heart_break.gif" alt="Animated GIF" style="width: 300px; height: auto;">
                // </div>

                // <div style="position: absolute; top: 50%; right: 20px; transform: translate(50%, -50%);">
                //     <img src="assets/heart_break.gif" alt="Animated GIF" style="width: 300px; height: auto;">
                // </div>
  document.body.innerHTML = `

  <div style="background-image: url(assets/desert.jpg); background-size: cover;margin: 0;
  padding: 0;height: 100vh;">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <h2 class="card-title mb-4" style="font-size: 80px; color: red; margin-left: 70px;">
                    <span class="typing-animation completed" style="font-size: 80px; color: white">Game Completed!</span>
                </h2>

        <div style="position: absolute; top: 40%; right: 30%; z-index: 1;">
            <img src="assets/heart_break.gif" alt="Animated GIF" style="width: 300px; height: auto;">
          </div>
                <div class="card text-left">
                    <div class="card-body" id="cardBody">
               <p class="card-text">
                            <span class="typing-animation">PLAYER : ${username}</span>
                        </p>
                        <p class="card-text">
                            <span class="typing-animation"> SCORE : ${userScore}</span>
                        </p>
                        <p class="card-text">
                            <span class="typing-animation">PERCENTAGE : ${scorePercentage}</span>
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    </div></div>`;  

    }

    else{
   scorePercentage = (userScore / numberOfQuestions) * 100;
   document.body.innerHTML = `

  <div style="background-image: url(assets/desert.jpg); background-size: cover;margin: 0;
  padding: 0;height: 100vh;">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <h2 class="card-title mb-4" style="font-size: 80px; color: red; margin-left: 70px;">
                    <span class="typing-animation completed" style="font-size: 80px; color:  white">Game Completed!</span>
                </h2>

                
        <div style="position: absolute; top: 20%; right: 30%; z-index: 1;">
            <img src="assets/animated_gif.gif" alt="Animated GIF" style="width: 300px; height: auto;">
          </div>

                <div class="card text-left">
                    <div class="card-body" id="cardBody">
               <p class="card-text">
                            <span class="typing-animation">PLAYER : ${username}</span>
                        </p>
                        <p class="card-text">
                            <span class="typing-animation">SCORE : ${userScore}</span>
                        </p>
                        <p class="card-text">
                            <span class="typing-animation">PERCENTAGE : ${scorePercentage}</span>
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    </div></div>`;
    }

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
      // const correctAnswer = answers[currentQuestionCount];
      const correctAnswer = answers[randomIndex-1];
  
      console.log("Correct Answer: ", correctAnswer)
      if (clickedContinent == correctAnswer) {    
        console.log("Entered Inside if")
          userScore++;
          document.getElementById('result').innerHTML = '<strong>Correct Answer</strong>';
        }//to print statement in the div with id result
          else {
              document.getElementById('result').innerHTML = '<strong style="color: red">Wrong Answer</strong>';
          }

          document.getElementById("image-map-container-id").style="pointer-events: none"
      }
  
