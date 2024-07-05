// Import the readline-sync module for interactive terminal input
import readlineSync from "readline-sync";

// ASCII art for the application title
const appTitle = `
===============================
  ___        _
 / _ \\ _   _(_)________
| | | | | | | |_  /_  /
| |_| | |_| | |/ / / /
 \\__\\_\\__,_|_/___/___|
 / ___| __ _ _ __ ___   ___
| |  _ / _\` | '_ \` _ \\ / _ \\
| |_| | (_| | | | | | |  __/
 \\____|\\__,_|_| |_| |_|\\___|

===============================
`;

// Array of quiz questions and answers
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome"],
    answer: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
    answer: 2,
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: [
      "1. Harper Lee",
      "2. Mark Twain",
      "3. J.K. Rowling",
      "4. Ernest Hemingway",
    ],
    answer: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      "1. Elephant",
      "2. Blue Whale",
      "3. Great White Shark",
      "4. Giraffe",
    ],
    answer: 2,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["1. O2", "2. H2O", "3. CO2", "4. NaCl"],
    answer: 2,
  },
];

// Inform the user about the Quiz Game
const welcomeMessage = `
🤗 Welcome to the Quiz Game!\n
😌 You will be presented with a series of questions.(${quizQuestions.length} in total)
😌 You can choose the correct answer by typing the number of the option.\n
😌 Your final score will be displayed at the end of the quiz.\n

🚀 Let's get started!\n
`;

// Function to display the main menu
function showMenu() {
  console.log(appTitle);
  console.log(welcomeMessage);
  console.log("1. Start Quiz 🚀\n");
  console.log("2. Exit Game 🚪\n");
}

// Function to start the quiz
function startQuiz() {
  let score = 0;

  for (const question of quizQuestions) {
    console.log(`\n🤔 ${question.question}`);
    question.options.forEach((option) => console.log(option));
    console.log("-".repeat(30)) + "\n";
    const userAnswer = parseInt(readlineSync.question("🤔 Your answer: "), 10);

    if (userAnswer === question.answer) {
      console.log("\n" + "*".repeat(30)) + "";
      console.log("🙂 Correct!");
      console.log("*".repeat(30)) + "\n";

      score++;
    } else {
      console.log("\n" + "*".repeat(30)) + "";
      console.log(
        `🙃 Oh Oooo! The correct answer is ${
          question.options[question.answer - 1]
        }.\n`
      );
      console.log("*".repeat(30)) + "\n";
    }
  }

  console.log("=====================================\n");
  console.log(
    `\n 📝 Your final score is: ${score} out of ${quizQuestions.length}\n`
  );
  console.log("=====================================\n");
}

// Main function to run the Quiz Game
function startQuizGame() {
  let isRunning = true;

  while (isRunning) {
    showMenu();
    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
      case "1":
        startQuiz();
        break;
      case "2":
        isRunning = false;
        console.log("=".repeat(30));
        console.log(
          "\n💐 Thank you for taking the quizz. I hope you had as much fun playing it as I did building it!\n"
        );
        console.log("=".repeat(30));
        break;
      default:
        console.log("\n❗️ Invalid option. Please choose 1 or 2.\n");
    }
  }
}

// Start the Quiz Game
startQuizGame();
