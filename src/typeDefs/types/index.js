const { gql } = require("apollo-server");

const userType = gql`
  type User {
    username: String!
    password: String!
    token: String
  }
`

module.exports = {
  userType
};
