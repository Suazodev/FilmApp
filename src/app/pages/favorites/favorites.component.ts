import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: []
})
export class FavoritesComponent {
  films: any[]
  favoritesFilms = []
  exists = false

  constructor() {
    this.films = JSON.parse(localStorage.getItem('Films'))
  }

}
