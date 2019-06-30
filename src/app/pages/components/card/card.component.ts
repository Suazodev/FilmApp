import { Component, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {
  @Input() items: any[] = []
  @Input() exists: boolean = true
  filmArr = []

  constructor() {
    if (JSON.parse(localStorage.getItem('Films'))) {
      this.filmArr = JSON.parse(localStorage.getItem('Films'))
    }
    
  }

  addToFavorites(item) {
    this.filmArr.push(item)
    localStorage.setItem('Films', JSON.stringify(this.filmArr))
  }

  removeToFavorites(item) {
    for (let i = 0; i < JSON.parse(localStorage.getItem('Films')).length; i++) {   
      const element = JSON.parse(localStorage.getItem('Films'))[i];
      if (item.Title === element.Title) {
        this.items.splice(i, 1)
      }
    }
    localStorage.removeItem('Films')
    localStorage.setItem('Films', JSON.stringify(this.items))
    if (JSON.parse(localStorage.getItem('Films')).length < 1) {
      localStorage.removeItem('Films')
    }
  }
}
