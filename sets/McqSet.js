const McqQuestion = require("../models/McqQuestion");
const BaseSet = require("./setModels/BaseSet");

class McqSet extends BaseSet {
  questions = [];

  constructor(id, nQuestions, offset = 0, limit = 5) {
    super(id);
    this.n = nQuestions;
    this.offset = offset;
    this.limit = limit;
  }

  fetchInstructions() {
    console.log("Fetching instructions...");
  }

  startTheExam() {
    const conductExam = () => {
      this.questions.slice(this.offset, this.limit).forEach((q) => {
        setTimeout(() => {
          console.log(`\n\n${q.id + 1}). ${q.description}`);
          console.log(`options: ${q.options.join("  ")}`);
        }, 500 * q.id);
      });
    };

    this.getQuestions();
    conductExam();

    this.offset += this.limit;
    this.limit *= 2;

    this.getQuestions();
    conductExam();
  }

  skipQuestion(qid) {
    console.log("Skipping question-" + qid);
    this.questions[qid].isSkipped = true;
  }

  viewCorrectAnswer(qno) {
    let rand = Math.ceil(Math.random() * 3);
    const ans = this.questions[qno - 1].options[rand];
    console.log("Answer:-", ans);
  }

  getQuestions() {
    console.log("Getting questions...");
    for (let i = this.offset; i < this.limit; i++) {
      this.questions.push(new McqQuestion(i));
    }
  }

  endTheExam() {
    console.log("Exam has finished");
    console.log("---- your score: {xx} ----");
  }

  viewQuestions() {
    this.questions.forEach((q) => console.log(q.id + "). " + q.description));
  }
}

module.exports = McqSet;
