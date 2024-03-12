import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser {
    getUser {
      _id
      userName
      email
      lists {
        _id
        name
        orders {
          image
          
        }
        
      }
    }
  }
`;
