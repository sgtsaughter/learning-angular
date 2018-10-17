import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /* TODO: Add a page where the user can delete themselves, or other users...maybe a user profile page.  
  Something so we can use the deleteUser API call */

  addUser(email, password) {
    this.loginService
      .addUser(email, password)
      .subscribe(
        (data) => {
          this.toastr.success('Your New User Has Been Added')
          console.log(data);
        },
        (error) => {
          this.toastr.error(error.error.message)
          console.log(error);
        }
      );
  }

  login(email, password) {
    this.loginService
      .loginUser(email, password)
      .subscribe((data: User) => {
        this.user = data;
        console.log(this.user);
        localStorage.setItem('token', JSON.stringify(this.user.token));
        this.router.navigateByUrl(this.returnUrl);
        this.toastr.success(this.user.message);
      },
        (error) => {
          this.toastr.error(error.error.message)
          console.log(error);
        }
      )
  }
}
