import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DbCharacterComponent } from './components/db-character/db-character.component';

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
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
