import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        // private authService: AuthService, 
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log(`Url: ${state.url}`)

        let isLoggedIn: string | null = localStorage.getItem('isUserLoggedIn');

        if (isLoggedIn) {
            return true;
        }

        this.router.navigate(['/auth', 'login']);
        return false;
    }
}