import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        private readonly activatedRoute: ActivatedRoute
    ) {
        const localStorageToken = localStorage.getItem('isUserLoggedIn');
        if (!localStorageToken) {
            return;
        }
        const isUserLoggedIn = localStorageToken === 'true' ? true : false;
        this.userLoggedIn.next(isUserLoggedIn);
        console.log(activatedRoute);
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

        return this.isUserLoggedIn.pipe(
            delay(500)
        );
    }

    localRegister(email: string, username: string, password: string): Observable<boolean> {
        console.log(email);
        console.log(password);
        console.log(username);

        if (email == 'admin@mail.ru' && password == 'admin') {
            this.userLoggedIn.next(true);
        }

        this.isUserLoggedIn.subscribe(value => {
            localStorage.setItem('isUserLoggedIn', value.toString());
        });
        
        return this.userLoggedIn.pipe(
            delay(1000)
        );
    }

    logout(): void {
        this.userLoggedIn.next(false);
        localStorage.removeItem('isUserLoggedIn');
    }
}
