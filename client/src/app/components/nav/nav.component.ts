import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from 'src/libs/auth';
import { IMenu } from '../../interfaces';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
    menu!: IMenu[];
    isLoggedIn!: boolean;

    constructor(
        private readonly authService: AuthService
    ) {
        this.menu = [
            { id: 1, title: 'Главная', href: '/', icon: 'bi bi-people' },
            { id: 2, title: 'Пиво', href: '/beers', icon: 'bi bi-hourglass-bottom' },
            { id: 3, title: 'Про нас', href: '/about', icon: 'bi bi-app-indicator' }
        ];
    }

    ngOnInit(): void {
        this.authService.user.subscribe(value => {
            if (value) {
                this.menu[2] = { id: 4, title: 'Выйти', href: '/auth/logout', icon: 'bi bi-sign-turn-left' };
            } else {
                this.menu[2] = { id: 4, title: 'Войти', href: '/auth/login', icon: 'bi bi-sign-do-not-enter' };
            }
        })
    }
}
