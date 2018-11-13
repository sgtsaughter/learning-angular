import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./components/app-component/app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { DbCharacterComponent } from "./components/db-character/db-character.component";
import { CharacterService } from "./services/character.service";
import { DbCharacterDetailComponent } from "./components/db-character-detail/db-character-detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FilterPipeModule } from "ngx-filter-pipe";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth.guard";
import { AuthService } from "./services/auth.services";
import { ChatComponent } from "./components/chat/chat.component";
import { SocketService } from "./services/socket.service";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DbCharacterComponent,
    DbCharacterDetailComponent,
    LoginComponent,
    ChatComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FilterPipeModule,
    DragDropModule
  ],
  providers: [CharacterService, AuthGuard, AuthService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
