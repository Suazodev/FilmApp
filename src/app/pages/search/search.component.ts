import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  newFilms: Film[] = []

  constructor(private _film: FilmsService) { }

  search(word: string) {
    this._film.getFilm(word).subscribe(data => this.newFilms.push(data as any))
  }
}
