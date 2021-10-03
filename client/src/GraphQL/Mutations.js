import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $message: String!
    $userName: String!
    $createdTime: String!
  ) {
    createUser(
      message: $message
      userName: $userName
      createdTime: $createdTime
    ) {
      id
    }
  }
`;
