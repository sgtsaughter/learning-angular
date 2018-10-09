import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../character.service';
import { Character } from '../../character.model';

@Component({
  selector: 'app-db-character',
  templateUrl: './db-character.component.html',
  styleUrls: ['./db-character.component.css']
})
export class DbCharacterComponent implements OnInit {

  characters: Character[];
  selectedFile = null;  

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  addCharacter(name, description, isCool, characterImage) {
    this.characterService
    .addCharacter(name, description, isCool, this.selectedFile)
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

  onFileSelected(event) {
    console.log(event);
    //Always pick the first file if we ever add functionality to add multiple files, we can't use the first item in the array. 
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    
  }

}
