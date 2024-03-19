// need to add everything we need for our user typedef

const typeDefs = `
type Order {
  _id: ID
  image: String
  
}

type List {
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
  lists: [List]
 

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
  addList(name: String!): List
  addOrder(listId: ID!, image: String!): List
  deleteOrder(listId: ID!, orderId: ID!): List

}
`;

module.exports = typeDefs;
