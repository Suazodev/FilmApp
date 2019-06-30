import { Component, AfterContentInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: []
})
export class FavoritesComponent implements AfterContentInit {

  
  newFilm: Film

  constructor(private films: FilmsService) {
    
  }

  ngAfterContentInit(): void {
    this.films.getFilm()
      .subscribe((film: Film) => {
        console.log(film);
        this.newFilm = film
      })
  }
}
