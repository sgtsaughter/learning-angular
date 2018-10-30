import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addUser(email, password, username, gender, newsletter, userImage) {
    //TODO: Find out why when sending data using FormData() the request returns and empty obj 
    //but doesn't return an empty obj when using the other character api calls 

    const user = new FormData();
    user.append('email', email);
    user.append('password', password);
    user.append('username', username);
    user.append('gender', gender);
    user.append('newsletter', newsletter);
    user.append('userImage', userImage, userImage.name);

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

  getUserDetails() {
    const token = localStorage.getItem('token');
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      console.log(JSON.parse(payload));
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  /* watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  } */

}
