import { gql } from 'apollo-angular';
import { IUser } from 'src/app/interfaces/IUser';

export interface IGET_ONE_USER {
  getOneUser: IUser;
}

export const GET_ONE_USER = gql`
  query getOneUser($id: Float!) {
    getOneUser(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
