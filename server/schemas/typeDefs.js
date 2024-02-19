// need to add everything we need for our user typedef

const typeDefs = `
type Profile {
  _id: ID
  firstName: String
  lastName: String
  userName: String
  email: String
 

}
type Auth {
  token: ID!
  user: Profile
}
type Query {
  getOwnProfile: Profile
}
type Mutation {
   addUser(userName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth

}
`;

module.exports = typeDefs;
