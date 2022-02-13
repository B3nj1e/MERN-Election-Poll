const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const electionPoll = new Schema ({
  type: String, 
  // obtain party from event click on box?? or obtain via drop down box array??
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

// ORRRRRR

const electionPollSchema = new Schema ({
  liberal: {

  },
  nationals: {

  },
  labor: {

  },
  greens: {

  },
  animalJustice: {

  },
  oneNation: {

  },
  advanceSA: {

  },
  familyFirstSA: {

  },
  independent: {

  }

  // OR vote: { selection from array with liberal, nationals, labor ...etc}

});

const electionPoll = model('electionPoll', electionPollSchema);

module.exports = electionPoll;
