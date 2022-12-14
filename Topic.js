const McqSet = require("./sets/McqSet");
const PracticeSet = require("./sets/PracticeSet");
const AssgSet = require("./sets/AssgSet");
const CodingSet = require("./sets/CodingSet");
const LearningSet = require("./sets/LearningSet");
const setTypes = require("./models/setTypes");

class Topic {
  sets = [];

  constructor({ id, name, duration, sets }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    sets && sets.forEach((s) => this.addSet(s.type, s.id));
  }

  editTopic(name, duration) {
    this.name = name;
    this.duration = duration;
    console.log("Successfully edited the topic");
  }

  addSet(type, id, nQuestions = 6) {
    switch (type) {
      case setTypes.mcq: {
        this.sets.push(new McqSet(id, nQuestions));
        break;
      }
      case setTypes.practice: {
        this.sets.push(new PracticeSet(id, nQuestions));
        break;
      }
      case setTypes.assg: {
        this.sets.push(new AssgSet(id, nQuestions));
        break;
      }
      case setTypes.learning: {
        this.sets.push(new LearningSet(id, nQuestions));
        break;
      }
      case setTypes.coding: {
        this.sets.push(new CodingSet(id, nQuestions));
        break;
      }
    }
  }
}

module.exports = Topic;
