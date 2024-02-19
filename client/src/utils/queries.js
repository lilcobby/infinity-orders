import { gql } from "@apollo/client";

export const GET_OWN_PROFILE = gql`
  query getOwnProfile {
    getOwnProfile {
      _id
      firstName
      lastName
      userName
      email
    }
  }
`;
