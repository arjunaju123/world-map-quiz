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
"South America"];

let currentQuestion = 0;         
let score = 0;

const checkAnswer = (clickedContinent) =>  {
    const correctAnswer = answers[currentQuestion];

    if (clickedContinent == correctAnswer) {    
        score++;
        document.getElementById('result').innerHTML = 'Correct Answer';}//to print statement in the div with id result
        else {
        
            document.getElementById('result').innerHTML = 'Wrong Answer';;
        }
    }
