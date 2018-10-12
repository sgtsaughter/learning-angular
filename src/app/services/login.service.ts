import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {  }

  addUser(email, password) {
    //TODO: Find out why when sending data using FormData() the request returns and empty obj 
    //but doesn't return an empty obj when using the other character api calls 

    // const user = new FormData();
    // user.append('email', email);
    // user.append('password', password);

    const user = {
      "email": email,
      "password": password,
    }
    
    return this.http.post(`${this.uri}/signup`, user);
  }

  loginUser(email, password) {
    const user = {
      "email": email,
      "password": password,
    }

    return this.http.post(`${this.uri}/login`, user);
  }

  deleteUser(id) {
    return this.http.get(`${this.uri}/deleteUser/${id}`);
  }

}
