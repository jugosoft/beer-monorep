import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { Roles } from 'src/libs/auth';

import { IUser } from 'src/libs/interfaces';
import { ApiModule } from '../api.module';
import { IUserService } from './api-users.service.interface';

const users: IUser[] = [{
    id: Guid.parse('4ede6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    email: 'admin@mail.ru',
    name: 'admin',
    role: Roles.Admin,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZWRlNmUxYi04ZDlkLTRmOGQtOTgxNi1hMmExNTU0ODY2ZWEiLCJuYW1lIjoiYWRtaW4ifQ.oiaRyiqTYtSw8dsYPUg0WyHao7FViglkUQcyS_sim1U',
    password: 'password',
    hashedRT: '',
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    id: Guid.parse('6cde6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    email: 'client@mail.ru',
    name: 'client',
    role: Roles.Client,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Y2RlNmUxYi04ZDlkLTRmOGQtOTgxNi1hMmExNTU0ODY2ZWEiLCJuYW1lIjoiY2xpZW50In0.os4T6uDXC9QI-qzsqNawK0tf1hL7bsqr6Zy4DVJiGMw',
    password: 'password',
    hashedRT: '',
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    id: Guid.parse('8cde6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    email: 'premium@mail.ru',
    name: 'premium',
    role: Roles.Client,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Y2RlNmUxYi04ZDlkLTRmOGQtOTgxNi1hMmExNTU0ODY2ZWEiLCJuYW1lIjoicHJlbWl1bSJ9.QOnYUpR4aCTenNxqWabdlPnLG7-uSWIrxZ65WQX8W4k',
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
        
        return of({...registeredUser, id: Guid.create()});
    }

    updateUser(userToUpdate: IUser): Observable<IUser> {
        throw new Error('Method not implemented.');
    }

    deleteUser(userId: Guid): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
