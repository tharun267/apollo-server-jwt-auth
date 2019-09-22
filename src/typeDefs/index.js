const { query } = require("./query");
const { userType } = require("./types");

const typeDefs = [query, userType];

module.exports = {
  typeDefs,
};
