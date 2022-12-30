import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';
import { ApiUsersService } from 'src/libs/api';
import { IUser } from 'src/libs/interfaces';
import { Roles } from './roles';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user!: Observable<IUser>;
    userSubject!: BehaviorSubject<IUser>;

    constructor(
        private readonly usersService: ApiUsersService,
        private readonly router: Router
    ) {
        this.userSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUSer') as string));
        this.user = this.userSubject.asObservable()
    }

    public get userValue(): IUser | null {
        if (this.userSubject) {
            return this.userSubject.value;
        }
        return null;
    }

    get isAdmin(): boolean {
        return this.userSubject?.value.role === Roles.Admin;
    }

    get isClient(): boolean {
        return this.userSubject?.value.role === Roles.Client
    }

    localLogin(email: string, password: string): Observable<IUser> {
        this.user = this.usersService.getUserByEmail(email);
        this.user.subscribe(data => {
            this.userSubject?.next(data);
        });

        if (!this.userValue) {
            throw new Error('User doesnt exist');
        }

        if (this.userValue.email !== email || this.userValue.password !== password) {
            throw new Error('Invalid credentials');
        }

        this.router.navigate(['/posts']);

        localStorage.setItem('currentUser', JSON.stringify(this.userValue));
        return this.user;
    }

    localRegister(email: string, username: string, password: string): Observable<IUser> {
        if (!email || !username || !password) {
            throw new Error('Invalid register data');
        }
        
        throw new Error('Registration is not allow in mock mode');
    }

    logout(): void {
        this.userSubject?.next(null!);
        this.router.navigate(['/posts']);
        localStorage.removeItem('jwt');
    }
}
