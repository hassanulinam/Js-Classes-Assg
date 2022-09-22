const BaseSet = require("./BaseSet");
const CodingQuestion = require("../../models/CodingQuestion");

class CodingRelatedSet extends BaseSet {
  questions = [];

  constructor(id, noOfQs) {
    super(id);
    this.noOfQs = noOfQs;
    for (let i = 0; i < this.noOfQs; i++) {
      this.questions.push(new CodingQuestion(i));
    }
  }

  getAllQuestions() {
    return this.questions;
  }

  getQuestionDetails(qid) {
    const qd = this.questions.find((q) => q.id === qid);
    console.log("Question-Details\n", qd.description);
  }

  submitCode(qid) {
    console.log("Submitting code for question-" + qid);
    this.questions = this.questions.map((q) =>
      q.id === qid ? { ...q, isAnswered: true } : q
    );
  }

  runCode(qid) {
    console.log("Running Code " + qid);
  }

  getSubmissions(qid) {
    console.log("Showing All Submissions", qid);
  }

  getHints(qid) {
    return "Some hints....";
  }

  getDiscussions() {
    console.log("Showing Discussions");
  }

  getListOfSubmissions(qid) {
    console.log("Showing All Submissions for question:", qid);
  }

  getHints(qid) {
    console.log("showing hints for question:", qid);
  }

  viewSolutions(qid) {
    console.log("Showing Solutions for question:", qid);
  }
}

module.exports = CodingRelatedSet;
