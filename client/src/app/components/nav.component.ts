import { Component } from '@angular/core';
import { IMenu } from '../interfaces';

@Component({
  selector: 'app-nav',
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
export class NavComponent {
  menu?: IMenu[];

  constructor() {
    this.menu = [
      { id: 1, title: 'Main', href: '/', icon: 'bi bi-people' },
      { id: 2, title: 'Users', href: '/users', icon: 'bi bi-ticket-detailed' },
      { id: 3, title: 'About', href: '/about', icon: 'bi bi-app-indicator' },
      { id: 4, title: 'Logout', href: '/auth/logout', icon: 'bi bi-app-indicator' },
    ];
  }
}
