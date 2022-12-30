import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRegister } from 'src/app/interfaces';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
    public formData!: FormGroup;
    public returnUrl!: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private readonly route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.formData = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            agreement: new FormControl(null, [Validators.requiredTrue]),
        });
    }

    onLocalRegisterSubmit() {
        if (this.formData.invalid) {
            return;
        }

        const registerForm: IRegister= {
            email: this.formData.value?.email,
            username: this.formData.value?.username,
            password: this.formData.value?.password,
        };

        console.log(`Register page: ${registerForm.email}`);
        console.log(`Register page: ${registerForm.username}`);
        console.log(`Register page: ${registerForm.password}`);

        this.authService.localRegister(registerForm.email, registerForm.username, registerForm.password).subscribe(data => {
            if (!data) {
                throw new Error('Registration is failed');
            }

            this.route.queryParams.subscribe(params => {
                this.returnUrl = params['returnUrl'];
            });

            if (this.returnUrl) {
                this.router.navigate([this.returnUrl])
            } else {
                this.router.navigate(['/posts']);
            }
        });
    }
}