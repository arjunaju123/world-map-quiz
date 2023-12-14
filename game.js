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
<<<<<<< HEAD
"South America"
];

// let currentQuestion = 0;         
=======
"South America"];

let currentQuestion = 0;         
>>>>>>> 2a5845699ab11aab6d358cdbd73043cdf65dc93a
let score = 0;

const checkAnswer = (clickedContinent) =>  {
    const correctAnswer = answers[currentQuestion];

    if (clickedContinent == correctAnswer) {    
        score++;
<<<<<<< HEAD
        document.getElementById('result').innerHTML = 'Correct Answer';
    }//to print statement in the div with id result
        else {
        
            document.getElementById('result').innerHTML = 'Wrong Answer';
=======
        document.getElementById('result').innerHTML = 'Correct Answer';}//to print statement in the div with id result
        else {
        
            document.getElementById('result').innerHTML = 'Wrong Answer';;
>>>>>>> 2a5845699ab11aab6d358cdbd73043cdf65dc93a
        }
    }
