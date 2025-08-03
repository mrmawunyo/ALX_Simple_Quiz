// Function to check the user's answer
function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // 3. Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // 4. Compare and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// 5. Add a click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);