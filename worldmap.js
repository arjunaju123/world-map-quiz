function storeUserData() {
    // Get the values from the input fields
    const username = document.getElementById('firstName').value;
    const numberOfQuestions = parseInt(document.getElementById('number').value, 10);

    // Store the data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('numberOfQuestions', numberOfQuestions);

}

function getUserData() {
    // Get the data from localStorage
    let username = localStorage.getItem('username');
    let numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestions'), 10);

    return {
        username,
        numberOfQuestions
    };
}
