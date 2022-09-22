class CodingQuestion {
  constructor(i) {
    this.id = "sq-" + (i + 1);
    this.description = "Sample Question - " + (i + 1);
    this.isAnswered = false;
    this.answer = "";
  }
}

module.exports = CodingQuestion;
