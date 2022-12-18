import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
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

    getUserById(userId: Guid): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    getUserByName(username: string): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    getUserByEmail(email: string): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    addUser(newUser: IUser): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    updateUser(userToUpdate: IUser): Observable<IUser> {
        throw new Error('Method not implemented.');
    }
    
    deleteUser(userId: Guid): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
