const { AuthenticationError } = require('apollo-server-express');
const { User, electionPoll } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('electionPoll');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('electionPoll');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, age, education, relationshop, salary, location }) => {
      const user = await User.create({ username, email, password, age, education, relationshop, salary, location });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
