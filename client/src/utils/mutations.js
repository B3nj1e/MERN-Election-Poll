import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $age: Number!, $education: String!, $relationship: String!, $salary: String!, $location: String!, $vote: String! ) {
    addUser(username: $username, email: $email, password: $password, age: $age, education: $eduation, relationship: $relationship, salary: $salary, location: $location, vote: $vote) {
      token
      user {
        _id
        username
      }
    }
  }
`;