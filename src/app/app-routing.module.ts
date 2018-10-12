import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { DbCharacterDetailComponent } from './components/db-character-detail/db-character-detail.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },

  {
    path: 'todo-list',
    component: TodoListComponent
  },

  {
    path: 'dbz',
    component: DbCharacterComponent
  },

  {
    path: 'db-character/:id',
    component: DbCharacterDetailComponent
  },

  {
    path: 'signup',
    component: LoginComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
