import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DbCharacterComponent } from './components/db-character/db-character.component';
import { DbCharacterDetailComponent } from './components/db-character-detail/db-character-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { WeatherComponent } from 'src/app/components/weather/weather.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },

  {
    path: 'todo-list',
    component: TodoListComponent,
    canActivate: [AuthGuard]
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
  },

  {
    path: 'chat',
    component: ChatComponent
  },

  {
    path: 'weather',
    component: WeatherComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
