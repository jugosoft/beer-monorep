import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { GET_ALL_USERS, IGET_ALL_USERS } from './gql/get-all-users';

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
        map(({data}) => data?.getAllUsers)
      );
  }
}
