import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {  }

  addUser(email, password) {
    const user = new FormData();
    user.append('email', email);
    user.append('password', password);
    
    return this.http.post(`${this.uri}/signup`, user);
  }

  loginUser(email, password) {
    const user = new FormData();
    user.append('email', email);
    user.append('password', password);
    
    return this.http.post(`${this.uri}/login`, user);
  }

  deleteUser(id) {
    return this.http.get(`${this.uri}/deleteUser/${id}`);
  }

}
