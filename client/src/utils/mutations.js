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
  mutation addUser($username: String!, $email: String!, $password: String!, $age: String!, $education: String!, $relationship: String!, $salary: String!, $location: String!, $vote: String!) {
    addUser(username: $username, email: $email, password: $password, age: $age, education: $education, relationship: $relationship, salary: $salary, location: $location, vote: $vote) {
      token
      user {
        _id
        username
        email
        age
        education
        relationship
        salary
        location
        vote
      }
    }
  }
`;