import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GitUsersComponent } from './components/git-users/git-users.component';
import { GitReposComponent } from './components/git-repos/git-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUsersComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
