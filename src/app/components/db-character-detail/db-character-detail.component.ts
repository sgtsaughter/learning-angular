import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../character.service';
import { Character } from '../../character.model';

@Component({
  selector: 'app-db-character-detail',
  templateUrl: './db-character-detail.component.html',
  styleUrls: ['./db-character-detail.component.css']
})
export class DbCharacterDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  characterID = null;
  characterDetail: Character[];
  selectedFile = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterID = params['id'];
      console.log(params) //log the entire params object
      console.log() //log the value of id
    });
    this.getCharacter(this.characterID);
  }

  getCharacter(id) {
    this.characterService
    .getCharacterById(id)
    .subscribe((data: Character[]) => {
      this.characterDetail = data;
      console.log("Data requested....");
      console.log(this.characterDetail);
    });
  }

  onFileSelected(event) {
    console.log(event);
    //Always pick the first file if we ever add functionality to add multiple files, we can't use the first item in the array. 
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    
  }

  updateDetails(name, description, isCool) {
    this.characterService
    .updateCharacter(this.characterID, name, description, isCool, this.selectedFile)
    .subscribe(() => {
      console.log('character has been updated');
      this.getCharacter(this.characterID);
    })
  }

}
