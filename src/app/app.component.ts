import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов';

  links = [
    { path: '/dashboard', icon: 'dashboard', label: 'Главная'},
    { path: '/filmList', icon: 'view_list', label: 'Все фильмы'},
    { path: '/profile', icon: 'person', label: 'Профиль'}
  ];

}
