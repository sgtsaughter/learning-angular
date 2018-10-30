import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService) { }
  ngOnInit() {

  }

  logOut() {
    localStorage.removeItem('token');
  }

  public checkLoggedIn(): boolean {
    const userDetails = this.loginService.getUserDetails();
    if (userDetails) {
      return userDetails.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  title = 'Angular Sandbox';

  tokenInfo = this.loginService.getUserDetails();

}
