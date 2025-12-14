/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-13
 * @fileoverview Simulate a random number guessing game.
 */

// Gemerate a random number to guess.
const randomNumber: number = Math.floor(Math.random() * 10 + 1);

let guess: number = 0;

// Game loop
do {
  guess = parseInt(
    prompt("Guess a number from 1 to 10. Enter 0 to end the program.") || "0",
  );
} while (guess != randomNumber && guess != 0);

// If the guess is equal to the random number (you succeeded) print a congratulations message.
if (guess == randomNumber) {
  console.log(
    `Congratulations! You guessed the correct number: ${randomNumber}`,
  );
} else {
  console.log("You quit the game.");
}
