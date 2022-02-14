const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const electionPoll = new Schema({
  vote: {
    type: String,
    // obtain party from event click on box?? or obtain via drop down box array??
    // then match vote with User ID, to them pull data from
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
})

// ORRRRRR

const electionPollSchema = new Schema({
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

electionPollSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

electionPollSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const electionPoll = model('electionPoll', electionPollSchema);

module.exports = electionPoll;
