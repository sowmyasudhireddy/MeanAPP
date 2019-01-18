import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  validateUser() {
    this.loginService.validateUser(this.username, this.password).subscribe(res => {
      if (res['loggedIn']) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid Username/password');
      }
    }, err => {
      console.log(err);
    });
  }

}
