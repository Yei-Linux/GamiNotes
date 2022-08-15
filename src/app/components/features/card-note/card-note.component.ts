import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../../models';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss'],
})
export class CardNoteComponent implements OnInit {
  @Input()
  card: CardModel = new CardModel();

  constructor() {}

  ngOnInit(): void {}

  hasNotes(): boolean {
    return this.card.totalNotes > 0;
  }

  getCardMemorizedText(): string {
    const memorizedText = `${this.card.memorizedCounter}/${this.card.totalNotes} cartas memorizadas`;

    return memorizedText;
  }

  goToNoteDetail(): string {
    return `/topic/${this.card.id}/notes`;
  }
}
