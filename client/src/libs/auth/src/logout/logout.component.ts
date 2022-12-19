import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(
        private authService: AuthService, 
        private readonly cdr: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.logout();
        this.cdr.detectChanges();
        this.router.navigate(['/posts']);
    }
}

