import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { ICREATE_USER, CREATE_USER } from './gql/create-user';
import { DELETE_USER, IDELETE_USER } from './gql/delete-one-user';
import { GET_ALL_USERS, IGET_ALL_USERS } from './gql/get-all-users';
import { GET_ONE_USER, IGET_ONE_USER } from './gql/get-one-user';
import { IUPDATE_USER, UPDATE_USER } from './gql/update-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly apollo: Apollo,
  ) { }

  getAllUsers(): Observable<IUser[]> {
    return this.apollo.watchQuery<IGET_ALL_USERS>({
      query: GET_ALL_USERS,
    })
      .valueChanges
      .pipe(
        map(({ data }) => data?.getAllUsers)
      );
  }

  getOneUser(id: number): Observable<IUser> {
    return this.apollo.watchQuery<IGET_ONE_USER>({
      query: GET_ONE_USER,
      variables: {
        id: +id,
      }
    })
      .valueChanges
      .pipe(
        map(({ data }) => data?.getOneUser)
      );
  }

  createUser(name: string, email: string, password: string): Observable<IUser | undefined> {
    return this.apollo.mutate<ICREATE_USER>({
      mutation: CREATE_USER,
      variables: {
        createUser: {
          name, email, password,
        },
      },
      refetchQueries: [ 'getAllUsers' ],
    }).pipe(map(({ data }) => data?.createUser));
  }

  updateUser(id: number, name: string, email: string): Observable<IUser | undefined> {
    return this.apollo.mutate<IUPDATE_USER>({
      mutation: UPDATE_USER,
      variables: {
        updateUser: {
          id, email, name,
        },
      },
      refetchQueries: [ 'getOneUser' ],
    }).pipe(map(({ data }) => data?.updateUser));
  }

  deleteUser(id: number): Observable<number | undefined> {
    return this.apollo.mutate<IDELETE_USER>({
      mutation: DELETE_USER,
      variables: {
        id: +id,
      },
      refetchQueries: [ 'getAllUsers' ],
    }).pipe(map(({ data }) => data?.removeUser))
  }
}
