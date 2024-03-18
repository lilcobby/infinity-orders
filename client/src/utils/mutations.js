import { gql } from "@apollo/client";
// mutations

// create the user/ signup
export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;
export const ADD_LIST = gql`
  mutation addList($name: String!) {
    addList(name: $name) {
      orders {
        image
      }
    }
  }
`;
export const ADD_ORDER = gql`
  mutation addOrder($listId: ID!, $image: String!) {
    addOrder(listId: $listId, image: $image) {
      orders {
        image
      }
    }
  }
`;
