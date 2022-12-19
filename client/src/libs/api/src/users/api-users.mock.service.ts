import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';

import { IUser } from 'src/libs/interfaces';
import { ApiModule } from '../api.module';
import { IUserService } from './api-users.service.interface';

const users: IUser[] = [{
    id: Guid.parse('4ede6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    email: 'admin@mail.ru',
    name: 'admin',
    password: 'password',
    hashedRT: '',
    createdAt: new Date(),
    updatedAt: new Date()
}];

@Injectable({
    providedIn: ApiModule
})
export class ApiUsersService implements IUserService {
    getUserById(userId: Guid): Observable<IUser> {
        const user = users.filter(user => user.id?.equals(userId)).pop();
        if (!user) {
            throw new Error('Пользователь с указанным ID не зарегистрирован');
        }
        return of(user);
    }

    getUserByName(username: string): Observable<IUser> {
        const user = users.filter(user => user.name === username).pop();
        if (!user) {
            throw new Error('Пользователь с указанным именем не зарегистрирован');
        }
        return of(user);
    }

    getUserByEmail(email: string): Observable<IUser> {
        const user = users.filter(user => user.email === email).pop();
        if (!user) {
            throw new Error('Пользователь с указанным email не зарегистрирован');
        }
        return of(user);
    }

    getUsers(): Observable<IUser[]> {
        return of(users);
    }

    addUser(newUser: IUser): Observable<IUser> {
        if (!newUser) {
            throw new Error('Невалидный пользователь');
        }

        const registeredUser: IUser = {...newUser, id: Guid.create()};
        users.push(registeredUser);
        
        return of(registeredUser);
    }

    updateUser(userToUpdate: IUser): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    deleteUser(userId: Guid): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
