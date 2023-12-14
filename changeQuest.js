
const questions = new Map([

    [1, "Which continent is India part of?"],

    [2, "Which is the largest continent in area?"],

    [3, "Which is the smallest continent in area?"],

    [4, "Which continent is also called as an 'Island-Continent'?"],

    [5, "The largest mountain in the world, Mount Everest is situated in which continent?"],

    [6, "On Which Continent Is Egypt?"],

    [7, "On which continent can you find France?"],

    [8, "Which is the Second biggest continent of the world?"],

    [9, "Columbus found which continent?"],

    [10, "Where is Amazon River?"]

]);

// const questionCountInput = document.getElementById("questionCountInput");
// const numberOfQuestions = questionCountInput.value;
// console.log(`Number of questions entered: ${numberOfQuestions}`);

let currentQuestionIndex = 0; // Initialize question index

function changeQuestion() {
    const questionElement = document.getElementById("question");

    if (currentQuestionIndex < questions.size) {
        currentQuestionIndex++; // Move to the next question
    } else {
        currentQuestionIndex = 1; // If no more questions, restart from the first question
    }

    // Update the question content using the Map's get() method
    questionElement.textContent = questions.get(currentQuestionIndex);
}
