import { Component, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {
  @Input() items: any[] = []

  constructor() { }
}
