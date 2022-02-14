const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  age: {
    // array from drop down list on front end
    type: Number,
    min: [18, 'You are too young to vote'],
    max: [120, 'You are too old to be alive']
  },
  education: {
    // array from drop down list on front end
    type: String,
    required: true
  },
  relationship: {
    // array from drop down list on front end
    type: String,
    required: true
  },
  salary: {
    // array from drop down list on front end
    type: String,
    required: true
  },
  location: {
    // array from drop down list on front end
    type: String,
    required: true
  },
  vote: {
    // array from drop down list on front end
    type: String,
    // import parties model
    party: {
      type: Schema.Types.ObjectId,
      ref: 'Party'
    },
    required: true
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;


// enum: ['Greens', 'Liberal', 'Labor', 'National', 'Animal Justice', 'One Nation', 'Independent', 'Advance SA', 'Family First'],

// enum: ['CBD', 'Northern Adelaide', 'Eastern Adelaide', 'Southern Adelaide', 'Western Adelaide', 'Northern SA', 'Eastern SA', 'Southern SA', 'Western SA']

// enum: ['< $50,000', '$50,000 - $100,000', '> $100,0000'],

// enum: ['< Year 10', 'Year 11', 'Year 12', 'Cert II', 'Cert III', 'Cert IV', 'Bachelor', 'Masters', 'PhD'],