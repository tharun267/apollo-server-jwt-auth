const { userResolvers } = require('./userResolvers');

const resolvers = [userResolvers];

module.exports = {
  resolvers,
};
