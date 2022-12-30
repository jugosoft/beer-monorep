import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const user = this.authService.userValue;

        // not logged in so redirect to login page with the return url
        if (!user) {
            this.router.navigate(['/auth', { queryParams: { returnUrl: state.url } }]);
            return false;
        }

        // check if route is restricted by role
        if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/posts']);
            return false;
        }

        // all checks passed
        return true;
    }
}