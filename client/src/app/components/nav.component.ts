import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from 'src/libs/auth';
import { IMenu } from '../interfaces';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BeerApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" *ngFor="let m of menu">
                    <a 
                        class="nav-link"
                        [routerLink]="m.href"
                        routerLinkActive="active"
                        [routerLinkActiveOptions]="{exact: true}"
                    >   
                      <app-icon [icon]="m.icon || 'bi bi-user'"></app-icon>
                      {{ m.title }}
                    </a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
      </nav>
    `
})
export class NavComponent implements OnInit {
    menu!: IMenu[];
    isLoggedIn!: boolean;

    constructor(
        private readonly authService: AuthService
    ) { 
        this.menu = [
            { id: 1, title: 'Главная', href: '/', icon: 'bi bi-people' },
            // { id: 2, title: 'Пользователи', href: '/users', icon: 'bi bi-ticket-detailed' },
            { id: 2, title: 'Про нас', href: '/about', icon: 'bi bi-app-indicator' }
        ];
    }

    ngOnInit(): void {
        this.authService.isUserLoggedIn.subscribe(value => {
            if (value) {
                this.menu[2] = { id: 3, title: 'Выйти', href: '/auth/logout', icon: 'bi bi-app-register' };
            } else {
                this.menu[2] = { id: 4, title: 'Войти', href: '/auth/login', icon: 'bi bi-app-login' };
            }
        })
    }
}
