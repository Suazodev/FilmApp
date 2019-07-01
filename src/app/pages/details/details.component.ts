import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent {
  film: Film

  constructor(
    private activatedRoute: ActivatedRoute,
    private _film: FilmsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this._film.getFilm(params.id)
        .subscribe((data: Film) => {
          this.film = data
        })
    })
  }
  locationBack() {
    window.history.back()
  }
}
