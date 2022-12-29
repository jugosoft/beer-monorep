import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/ILogin';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
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
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    onLocalLoginSubmit() {
        if (this.formData.invalid) {
            return;
        }

        const loginForm: ILogin = {
            email: this.formData.value?.email,
            password: this.formData.value?.password,
        };
        this.authService.localLogin(loginForm.email, loginForm.password).subscribe(data => {
            if (data) {
                this.router.navigate(['/posts']);
            }
        });
    }
}