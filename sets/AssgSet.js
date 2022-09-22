const CodingRelatedSet = require("./setModels/CodingRelatedSet");

class AssgSet extends CodingRelatedSet {
  constructor(id, noOfQs) {
    super(id, noOfQs);
  }
}

module.exports = AssgSet;
