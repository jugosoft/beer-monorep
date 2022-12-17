import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { IUser } from 'src/libs/interfaces';
import { ApiModule } from '../api.module';
import { IUserService } from './api-users.service.interface';


@Injectable({
    providedIn: ApiModule
})
export class ApiUsersService implements IUserService {
    getUsers(): Observable<IUser[]> {
        throw new Error('Method not implemented.');
    }

    addUser(newUser: IUser): Observable<IUser> {
        return of({...newUser, id: Guid.create()});
    }

    updateUser(userToUpdate: IUser): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    deleteUser(userId: number): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
