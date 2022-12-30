import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private apiUsers: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.apiUsers.userValue;
        const isLoggedIn = user && user.token;
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(request);
    }
}
