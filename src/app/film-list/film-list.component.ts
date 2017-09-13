import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[] = [];

  constructor() {}

  ngOnInit() {
  }

  private showFilms(e) {
    if(!e) {return;}
    this.filmList = e;
    console.log(this.filmList);
  }
}
