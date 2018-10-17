import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app-component/app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { CharacterService } from './services/character.service';
import { DbCharacterDetailComponent } from './components/db-character-detail/db-character-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.services';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DbCharacterComponent,
    DbCharacterDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FilterPipeModule,
  ],
  providers: [CharacterService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
