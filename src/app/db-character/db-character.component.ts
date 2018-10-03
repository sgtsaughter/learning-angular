import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-db-character',
  templateUrl: './db-character.component.html',
  styleUrls: ['./db-character.component.css']
})
export class DbCharacterComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  addCharacter(name, description, isCool) {
    this.characterService
    .addCharacter(name, description, isCool)
    .subscribe(() => {
      console.log('character has been created');
      this.fetchCharacters();
    })
  }

  fetchCharacters() {
    this.characterService
      .getCharacters()
      .subscribe((data: Character[]) => {
        this.characters = data;
        console.log("Data requested....");
        console.log(this.characters);
      });
  }

  deleteCharacter(id) {
    this.characterService.deleteCharacter(id).subscribe(() => {
      //Upate the list of chracters again after deleted. 
      this.fetchCharacters();
    });
  }

}
