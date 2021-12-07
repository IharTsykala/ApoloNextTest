import {gql} from "@apollo/client";

export const lOGIN_USERS = gql`
mutation logIn($User: LoginInput!) {
  logIn(input: $User) {
    access_token
  }
}
`
