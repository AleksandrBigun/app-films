import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FilmService} from '../../film.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filmList : Object[] = []
  filmName : string; 

  constructor(private filmCardService: FilmService) { }

  @Output()
  searchSubmitEvent: EventEmitter<object> = new EventEmitter<object>();
  
  private searchSubmit() {
    this.getFilms();
  }

  private getFilms(){
    if(!this.filmName) {return;}
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.searchSubmitEvent.emit(this.filmList);
    });
  }

  ngOnInit() {
    this.filmName = "Lord"
    this.searchSubmit();
  }

}
