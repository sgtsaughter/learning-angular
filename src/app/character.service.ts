import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {  }

  getCharacters() {
    return this.http.get(`${this.uri}/getCharacters`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/getCharacters/${id}`);
  }

  addCharacter(name, description, isCool, characterImage) {
    const character = new FormData();
    character.append('name', name);
    character.append('description', description);
    character.append('isCool', isCool);
    character.append('characterImage', characterImage, characterImage.name);
    
    return this.http.post(`${this.uri}/saveCharacters`, character);
  }

  updateCharacter(id, name, description, isCool) {
    const character = {
      name: name,
      description: description,
      isCool: isCool
    };
    
    return this.http.post(`${this.uri}/updateCharacter/${id}`, character);
  }

  deleteCharacter(id) {
    return this.http.get(`${this.uri}/deleteCharacter/${id}`);
  }


}
