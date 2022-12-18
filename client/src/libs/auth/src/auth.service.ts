import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ApiUsersService } from 'src/libs/api';
import { IUser } from 'src/libs/interfaces';
import { AuthModule } from './auth.module';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isUserLoggedIn: boolean = false;
    user!: IUser;

    constructor(
        private readonly usersService: ApiUsersService
    ) { }

    localLogin(email: string, password: string): Observable<boolean> {
        this.usersService.getUserByEmail(email).subscribe(user => {
            this.user = user;
        });

        if (this.user.email === email &&
            this.user.password === password) {
            this.isUserLoggedIn = true;
            localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn.toString());
        }

        return of(this.isUserLoggedIn).pipe(
            delay(1000),
            tap(val => {
                alert('Is User Authentication is successful');
            })
        );
    }

    localRegister(email: string, username: string, password: string): Observable<boolean> {
        console.log(email);
        console.log(password);
        console.log(username);

        this.isUserLoggedIn = email == 'admin@mail.ru' && password == 'admin';
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

        return of(this.isUserLoggedIn).pipe(
            delay(1000)
        );
    }

    logout(): void {
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    }
}
