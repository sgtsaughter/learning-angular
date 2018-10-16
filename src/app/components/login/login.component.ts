import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import { LoginService } from '../../services/login.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, 
              private toastr: ToastrService, 
              private router: Router, 
              private loginService: LoginService) { }

  ngOnInit() {
  }

  addUser(email, password) {
    this.loginService
    .addUser(email, password)
    .subscribe(() => {
      console.log('user has been created');
      this.toastr.success('Your New User Has Been Added');
      
    });
  }

  login(email,password) {
    this.loginService
    .loginUser(email, password)
    .subscribe((data: User) => {
      this.user = data;
      console.log(this.user);
      localStorage.setItem('token', JSON.stringify(this.user.token));
      this.toastr.success('You have been logged in');
    })
  }
}
