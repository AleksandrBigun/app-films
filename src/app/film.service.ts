import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmService {
  searchUrl: string = "https://api.themoviedb.org/3/search/movie?api_key=7fbd961705871c0138a5daaa6426f123&page=1&query=";
  filmUrl: string = "https://api.themoviedb.org/3/movie/";
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + filmName).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId + '?api_key=7fbd961705871c0138a5daaa6426f123&language=en-US').map(this.extractItemData);
  }

}
