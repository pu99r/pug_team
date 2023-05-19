const fs = require("fs");

class Thems {
  constructor(question, answer, score) {
    this.question = question;
    this.answer = answer;
    this.score = score;
  }
}

function getQQ(theme) {
  let newmass = [];
  let answers = fs
    .readFileSync(`./topics/${theme}/answers.txt`, "utf-8")
    .split("\n");
  let questions = fs
    .readFileSync(`./topics/${theme}/questions.txt`, "utf-8")
    .split("\n");
  for (let i = 0; i < questions.length; i++) {
    newmass.push(new Thems(questions[i], answers[i], (i + 1) * 100));
  }
  return newmass;
}
module.exports = getQQ;
