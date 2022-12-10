import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AuthModule } from './auth.module';


@Injectable({
    providedIn: AuthModule
})
export class AuthService {
    isUserLoggedIn: boolean = false;

    login(email: string, password: string): Observable<boolean> {
        console.log(email);
        console.log(password);
        this.isUserLoggedIn = email == 'admin@mail.ru' && password == 'admin';
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

        return of(this.isUserLoggedIn).pipe(
            delay(1000),
            tap(val => {
                alert('Is User Authentication is successful: ');
            })
        );
    }

    logout(): void {
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    }

    constructor() { }
}
