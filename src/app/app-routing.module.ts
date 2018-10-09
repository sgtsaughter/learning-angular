import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { DbCharacterDetailComponent } from './components/db-character-detail/db-character-detail.component';

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
  }



]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
