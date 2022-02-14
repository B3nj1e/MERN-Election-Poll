const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const partySchema = new Schema({
  name: {
    type: String,
    required: true
    // need to see datat base with parties eg. greens, lib, labor etc etc
  },
  poll: {
    type: String,
    required: true,
    // obtain user.vote and add to poll??
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
})


partySchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

partySchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Party = model('Party', partySchema);

module.exports = Party;
