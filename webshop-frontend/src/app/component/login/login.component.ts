import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submited = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthenticationService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email' : '',
      'password' : ''
    });
  }

  onSubmit() {
    this.submited = true;
    this.login();
  }

  login(): void {
    this.authService.attemptAuth(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
      data => {
        if (data.authorities[0].authority === 'ROLE_ADMIN') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/user');
        }
      }
    );
  }
}
