const readline = require("readline");
const fs = require("fs");
const QuestionClass = require("./Questions");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const thems = [
  {
    them: "car",
  },
  {
    them: "pugs",
  },
  {
    them: "Harry Potter",
  },
];

for (let i = 0; i < thems.length; i++) {
  console.log(`${1 + i}.`, thems[i].them);
}

reader.question("Выбери тему - ", function (input) {
  askQuestion(input);
});

let score = 0;
let currentQuestion = 0;

const questions = [
    {
      question: "Какая столица Франции? ",
      answer: "Париж",
    },
    {
      question: "Какой год начала Второй мировой войны? ",
      answer: "1939",
    },
    {
      question: "Сколько планет в Солнечной системе? ",
      answer: "8",
    },
  ];

function askQuestion(theme) {
  reader.question(questions[currentQuestion].question, (userAnswer) => {
    if (
      userAnswer.toLowerCase() ===
      questions[currentQuestion].answer.toLowerCase()
    ) {
      score++;
      console.log("Правильно!\n");
    } else {
      console.log("Неправильно!\n");
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
      console.log(`Ваш счет: ${score}/${questions.length}`);
      reader.close();
    } else {
      askQuestion(theme);
    }
  });
}
