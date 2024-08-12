import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sm-image-card',
  templateUrl: './sm-image-card.component.html',
  styleUrls: ['./sm-image-card.component.scss'],
})
export class SmImageCardComponent {
  @Input() image = '';
  favoriteStatus: boolean = false;

  addFavorite() {
    this.favoriteStatus = !this.favoriteStatus;
  }
}
