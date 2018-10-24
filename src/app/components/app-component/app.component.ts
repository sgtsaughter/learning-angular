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
    /* this.loginService.watchStorage().subscribe((data: string) => {
      let local = data;
      console.log(local);
    }); */
  }

  title = 'Angular Sandbox';

  tokenInfo = this.loginService.getUserDetails();

  // isLoggedIn = this.loginService.isLoggedIn();
}
