const { gql } = require("apollo-server");

const query = gql`
  type Query {
    me: User
  }
  type Mutation {
    register(username: String!, password: String!): User
    login(username: String!, password: String!): User
  }
`;

module.exports = {
  query,
};
