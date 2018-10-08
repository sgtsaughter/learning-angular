import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { CharacterService } from './character.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DbCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
