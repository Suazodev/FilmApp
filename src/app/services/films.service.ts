import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {
  }

  getFilm(text?: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=f12ba140&t=${text}`)
  }
}
