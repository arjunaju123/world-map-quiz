const { numberOfQuestions, username } = getUserData(); //getUserData() returns two values set in local storage

// Initialize question count
let currentQuestionCount = -1;

let userScore = 0;
let scorePercentage = 0;

// Arrow function to display the next question
const nextQuestion = () => {
  document.getElementById("result").innerHTML = "";

  document.getElementById("image-map-container-id").style =
    "pointer-events: auto"; // Enable pointer events for the image map container

  // Check if the current question count is less than or equal to the specified number
  if (currentQuestionCount < numberOfQuestions - 1) {
    //increment the question count
    currentQuestionCount++;
    // Display the next question
    changeQuestion();
  } else {//after last question is reached

    scorePercentage = Math.round((userScore / numberOfQuestions) * 100); //score percentage calculated

    if (scorePercentage < 50) {
      //append the completion page html and details to the current serious.html page
      document.body.innerHTML = `

  <div style="background-image: url(assets/desert.jpg); background-size: cover;margin: 0;
  padding: 0;height: 100vh;">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <h2 class="card-title mb-4" style="font-size: 80px; color: red; margin-left: 70px;">
                    <span class="typing-animation completed" style="font-size: 80px; color: white">Game Completed!</span>
                </h2>

        <div style="position: absolute; top: 25%; right: 30%; z-index: 1;">
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
                        <p class="card-text">
                            <span class="typing-animation" style="color:red;animation: slideAndType 7s infinite linear;font-size: 34px;";>YOU FAILED</span>
                        </p>  
                    </div>
                </div>
            </div>
        </div>
        <a href="index.html" class="btn btn-primary button-div try_again">Try Again!</a>
    </div></div>`;

      // Add the CSS styles for the bouncing animation
    document.head.innerHTML += `
        <style>
      @keyframes slideAndType {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(260%);
        }
      }
        </style>`;
    } else {
      //if score percentage greater than 50%
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
                        <p class="card-text">
                            <span class="typing-animation" style="color:green;animation: slideAndType 7s infinite linear;font-size: 34px;";>YOU WON</span>
                        </p>    
                    </div>
                </div>
            </div>
        </div>
        <a href="index.html" class="btn btn-primary button-div try_again">Try Again!</a>
    </div></div>`;

      // Add the CSS styles for the bouncing animation
      document.head.innerHTML += `
        <style>
      @keyframes slideAndType {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(400%);
        }
      }
        </style>`;
    }
  }
};

nextQuestion(); //call the question automatically for first question

const answers = [
  "Asia",
  "Asia",
  "Australia",
  "Australia",
  "Asia",
  "Africa",
  "Europe",
  "Africa",
  "North America",
  "South America",
];

const checkAnswer = (clickedContinent) => {
  //check answwer function returns the continent on the map we clicked.

  const audioCorrect = document.getElementById("audio-correct");
  const audioWrong = document.getElementById("audio-wrong");

  const correctAnswer = answers[randomIndex - 1]; // random index is got from 1 to 10. But answer array has values from 0 to 9.

  console.log("Correct Answer: ", correctAnswer);
  if (clickedContinent == correctAnswer) {
    audioCorrect.play();
    setTimeout(() => {
      audioCorrect.pause();
    } ,2000);
    userScore++; //user score increased by one
    document.getElementById("score-show").innerText = userScore;
    document.getElementById("result").innerHTML =
      "<strong>Correct Answer</strong>"; //result is showed - correct
  } //to print statement in the div with id result
  
  else {
    //if answer is wrong
    audioWrong.play();
    setTimeout(() => {
      audioWrong.pause();
    } ,2000);
    document.getElementById("result").innerHTML =
      '<strong style="color: red">Wrong Answer</strong>'; ////result is showed - wrong
  }

  document.getElementById("image-map-container-id").style =
    "pointer-events: none"; //user can select an answer only once. No more clicks can be done.
};
