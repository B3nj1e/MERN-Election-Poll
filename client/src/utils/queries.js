import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
`

export const QUERY_ALL_USERS = gql`
  query allUsers {
    users {
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
`

// export const QUERY_PARTY = gql`
//   query party()
// `

;
