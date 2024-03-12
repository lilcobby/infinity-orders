// need to add everything we need for our user typedef

const typeDefs = `
type Order {
  image: String
  
}

type Lists {
  _id: ID
  name: String
  orders: [Order]
  wins: Int
  losses: Int

}

type UserDetails {
  _id: ID
  userName: String
  email: String
  lists: [Lists]
 

}
type Auth {
  token: ID!
  user: UserDetails
}
type Query {
  getUser: UserDetails
}
type Mutation {
   addUser(userName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth

}
`;

module.exports = typeDefs;
