import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public formData!: FormGroup;
    public redirectUrl!: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.formData = new FormGroup({
            email: new FormControl('admin'),
            password: new FormControl('admin'),
        });
    }

    onClickSubmit(data: any) {
        const email: string = data.userName;
        const password: string = data.password;

        console.log(`Login page: ${email}`);
        console.log(`Login page: ${password}`);

        this.authService.login(email, password).subscribe(data => {
            console.log("Is Login Success: " + data);
            if (data) {
                this.router.navigate(['/home']);
            }
        });
    }
}