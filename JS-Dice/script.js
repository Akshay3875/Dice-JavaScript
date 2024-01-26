function rollDice() {
    const resultElement = document.getElementById("result-text");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    resultElement.innerText = "The result of the dice roll is: " + randomNumber;

    // Optionally, you can redirect to another page or display a modal for a more advanced application.
}
