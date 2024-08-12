import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  activeTab = 'login';
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  changeTab(name: string) {
    this.activeTab = name;
  }

  onRegistrationSubmit() {
    if (
      this.registrationForm.valid &&
      this.registrationForm.get('password')?.value ===
        this.registrationForm.get('confirm_password')?.value
    ) {
      console.log('Submit register : ');
      console.table(this.registrationForm.value);
      const name = this.registrationForm.get('name')?.value || '';
      const email = this.registrationForm.get('email')?.value || '';
      const password = this.registrationForm.get('password')?.value || '';

      this.authService
        .register(email, password, name)
        .catch((err) => console.log('Error : ', err));
    }
  }

  onLoginSubmit() {
    this.loginForm;
    console.log('Submit login : ');
    console.table(this.loginForm.value);

    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value || '';
      const password = this.loginForm.get('password')?.value || '';

      this.authService
        .login(email, password)
        .catch((err) => console.log('Error : ', err));
    }
  }

  //   {
  //     "$id": "66b88813002fa99bb546",
  //     "$createdAt": "2024-08-11T09:44:52.727+00:00",
  //     "$updatedAt": "2024-08-11T09:44:52.727+00:00",
  //     "name": "Ankit Sahu",
  //     "registration": "2024-08-11T09:44:52.680+00:00",
  //     "status": true,
  //     "labels": [],
  //     "passwordUpdate": "2024-08-11T09:44:52.680+00:00",
  //     "email": "ankit4b@gmail.com",
  //     "phone": "",
  //     "emailVerification": false,
  //     "phoneVerification": false,
  //     "mfa": false,
  //     "prefs": {},
  //     "targets": [
  //         {
  //             "$id": "66b88814cf21a41e5ca2",
  //             "$createdAt": "2024-08-11T09:44:52.848+00:00",
  //             "$updatedAt": "2024-08-11T09:44:52.848+00:00",
  //             "name": "",
  //             "userId": "66b88813002fa99bb546",
  //             "providerId": null,
  //             "providerType": "email",
  //             "identifier": "ankit4b@gmail.com"
  //         }
  //     ],
  //     "accessedAt": "2024-08-11T09:44:52.680+00:00"
  // }
}
