let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetBtn");
let messageDiv = document.getElementById("message");

let turnO = true;
let gameOver = false; // To keep track of whether the game is over
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function checkWin() {
    // Check for winning patterns
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText && boxes[a].innerText !== "") {
            return true;
        }
    }
    return false;
}

function checkTie() {
    // Check if all boxes are filled and no winner
    return [...boxes].every(box => box.innerText !== "") && !checkWin();
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (gameOver || box.innerText !== "") return; // Prevent moves if game is over or box is already clicked

        // Update the box with X or O
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        // Check if the current move results in a win
        if (checkWin()) {
            setTimeout(() => {
                messageDiv.innerText = "You win!";
                messageDiv.style.display = "block"; // Show the message
                gameOver = true; // End the game
            }, 100);
        } else if (checkTie()) {
            setTimeout(() => {
                messageDiv.innerText = "Game Tie!";
                messageDiv.style.display = "block"; // Show the message
                gameOver = true; // End the game
            }, 100);
        }
    });
});

// Reset the game when the reset button is clicked
resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
    });
    gameOver = false;
    turnO = true; // Reset to player O
    messageDiv.style.display = "none"; // Hide the message
});
