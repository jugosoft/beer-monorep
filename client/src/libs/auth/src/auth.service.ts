import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ApiUsersService } from 'src/libs/api';
import { IUser } from 'src/libs/interfaces';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user!: IUser;
    userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private readonly usersService: ApiUsersService,
        private readonly router: Router
    ) {
        const localStorageToken = localStorage.getItem('isUserLoggedIn');
        if (!localStorageToken) {
            return;
        }
        const isUserLoggedIn = localStorageToken === 'true' ? true : false;
        this.userLoggedIn.next(isUserLoggedIn);
    }

    get isUserLoggedIn(): Observable<boolean> {
        return this.userLoggedIn.asObservable();
    }

    localLogin(email: string, password: string): Observable<boolean> {
        this.usersService.getUserByEmail(email).subscribe(user => {
            this.user = user;
        });

        if (this.user.email === email &&
            this.user.password === password) {
            this.userLoggedIn.next(true);
            this.isUserLoggedIn.subscribe(value => {
                localStorage.setItem('isUserLoggedIn', value.toString());
            });
        }

        this.router.navigate(['/posts']);

        return this.isUserLoggedIn.pipe(
            delay(500)
        );
    }

    localRegister(email: string, username: string, password: string): Observable<boolean> {
        if (!email || !username || !password) {
            return of(false);
        }
  
        this.usersService.addUser({
            email: email,
            name: username,
            password: password,
            hashedRT: '',
            createdAt: new Date(),
            updatedAt: new Date(),
        }).subscribe(newUser => {
            if (newUser) {
                this.userLoggedIn.next(true);
                this.router.navigate(['/posts']);
            }
        });

        this.isUserLoggedIn.subscribe(value => {
            localStorage.setItem('isUserLoggedIn', value.toString());
        });

        return this.userLoggedIn.pipe(
            delay(3000)
        );
    }

    logout(): void {
        this.userLoggedIn.next(false);
        this.router.navigate(['/posts']);
        localStorage.removeItem('isUserLoggedIn');
    }
}
