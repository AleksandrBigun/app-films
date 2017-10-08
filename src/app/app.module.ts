import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchComponent } from './search/search.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { BrowsingComponent } from './browsing/browsing.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    SearchComponent,
    FilmComponent,
    HomeComponent,
    BrowsingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'film',
        component: FilmComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'browse',
        component: BrowsingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})

export class AppModule { }
