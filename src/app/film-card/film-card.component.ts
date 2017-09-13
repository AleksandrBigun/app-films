import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmItem: {} = {};

  ngOnInit() {
  }

}

