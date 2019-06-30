import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/interfaces/film';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  newFilms: Film[] = []
  exists = true


  constructor(private _film: FilmsService) { }

  search(word: string) {
    if (word) {
      this._film.getFilm(word)
        .subscribe(data => {
          if (data['Response'] === 'False') {
            Swal.fire({
              type: 'error',
              title: data['Error']
            })
          } else {
            this.newFilms.pop()
            this.newFilms.push(data as any)
          }
        })
    } else {
      Swal.fire({
        type: 'error',
        title: 'Write any title of a film',
      })
    }
  }
}
