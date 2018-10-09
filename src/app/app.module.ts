import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { CharacterService } from './character.service';
import { DbCharacterDetailComponent } from './components/db-character-detail/db-character-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DbCharacterComponent,
    DbCharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
