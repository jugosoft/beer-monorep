import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/app/interfaces/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      agreement: new FormControl(null, [Validators.requiredTrue]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    
    const loginForm: ILogin = {
      email: this.form.value?.email,
      password: this.form.value?.password,
    };

    alert(loginForm.email);
    alert(loginForm.password);
  }
}
