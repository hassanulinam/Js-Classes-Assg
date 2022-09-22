const CodingRelatedSet = require("./CodingRelatedSet");

class ModifiableCodingRelatedSet extends CodingRelatedSet {
  constructor(id, noOfQs) {
    super(id, noOfQs);
  }

  resetCode(qid) {
    console.log("resetting code for question" + qid);
    this.questions = this.questions.map((q) =>
      q.id === qid ? { ...q, answer: "" } : q
    );
  }

  saveCode(qid, userCode) {
    console.log("saving code for question " + qid);
    this.questions = this.questions.map((q) =>
      q.id === qid ? { ...q, answer: userCode } : q
    );
  }
}

module.exports = ModifiableCodingRelatedSet;
