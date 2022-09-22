class McqQuestion {
  constructor(i) {
    this.id = i;
    this.description = "Sample MCQ-" + (i + 1);
    this.options = ["option-1", "option-2", "option-3", "option-4"];
    this.isAnswered = false;
    this.answer = "";
    this.isSkipped = false;
  }
}

module.exports = McqQuestion;
