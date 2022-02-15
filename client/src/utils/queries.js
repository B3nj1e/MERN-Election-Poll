import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!, $email: String!, $age: String!, $education: String!, $relationship: String!, $salary: String!, $location: String!, $vote: String!) {
    user(username: $username, email: $email, age: $age, education: $education, relationship: $relationship, salary: $salary, location: $location, vote: $vote) {
      _id
      username
      email
      age
      education
      relationship
      salary
      location
    }
  }
`

// export const QUERY_PARTY = gql`
//   query party()
// `

;
