const readline = require("readline");
const getQQ = require("./Questions");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const thems = [
  {
    them: "Мопсы",
  },
  {
    them: "Капибары",
  },
  {
    them: "Простая математика",
  },
];

for (let i = 0; i < thems.length; i++) {
  console.log(`${1 + i}.`, thems[i].them);
}

reader.question("Выбери тему - ", function (input) {
  if (Number(input) <= thems.length && typeof Number(input) === "number") {
    console.log("\n");
    askQuestion(input);
  } else {
    console.log("\x1b[41m", "У нас нет такой темы ");
    reader.close();
  }
});

let score = 0;
let currentQuestion = 0;
function askQuestion(theme) {
  let questions = getQQ(theme);
  reader.question(
    questions[currentQuestion].question +
      "\n" +
      `(Вопрос за ${questions[currentQuestion].score})` +
      "\n",
    (userAnswer) => {
      if (
        userAnswer.toLowerCase() ===
        questions[currentQuestion].answer.toLowerCase()
      ) {
        score += questions[currentQuestion].score;
        console.log(`Правильно!😉 Ваш счёт ${score}\n`);
      } else {
        console.log(
          `Неправильно!🤬 Ваш счёт ${score}\nПравильный ответ: ${questions[currentQuestion].answer}\n`
        );
      }
      currentQuestion++;
      if (currentQuestion === questions.length) {
        console.log(
          "\x1b[42m",
          `Ваш счет: ${score}/${
            (questions.length / 2) * (1 + questions.length) * 100
          } `
        );
        reader.close();
      } else {
        askQuestion(theme);
      }
    }
  );
}
