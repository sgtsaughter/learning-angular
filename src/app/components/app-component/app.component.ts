import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(private loginService: LoginService) { }

  title = 'Angular Sandbox';


  tokenInfo = this.loginService.getUserDetails();
    

}
