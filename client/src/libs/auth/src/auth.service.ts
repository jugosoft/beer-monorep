import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/libs/interfaces';
import { Roles } from './roles';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user!: Observable<IUser>;
    userSubject!: BehaviorSubject<IUser>;

    constructor() {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const localStorageUser = JSON.parse(storedUser) as IUser;
            this.userSubject.next(localStorageUser);
        } 
    }

    public get userValue(): IUser {
        return this.userSubject.value;
    }

    get isAdmin(): boolean {
        return this.userSubject?.value.role === Roles.Admin;
    }

    get isClient(): boolean {
        return this.userSubject?.value.role === Roles.Client;
    }

    localLogin(email: string, password: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    localRegister(email: string, username: string, password: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    logout(): void {
        throw new Error('Method not implemented.');
    }
}
