const { AuthenticationError } = require('apollo-server-express');
const { User, Party } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async ( parent, {username, email, password, age, education, relationship, salary, location, vote}, context) => {
      return User.find( {username, email, password, age, education, relationship, salary, location, vote}).populate('User');
    },
    user: async (parent, { username, email, password, age, education, relationship, salary, location, vote }, context) => {
      return User.findOne({ username, email, password, age, education, relationship, salary, location, vote }).populate('User');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, age, education, relationship, salary, location, vote }) => {
      const user = await User.create({ username, email, password, age, education, relationship, salary, location, vote });
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
