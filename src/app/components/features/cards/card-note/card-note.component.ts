import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CardModel } from '../../../../models';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss'],
})
export class CardNoteComponent implements OnInit {
  @ViewChild('SwalPracticeModes')
  swalPracticeModes?: SwalComponent;
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

  handleShowModal() {
    this.swalPracticeModes?.fire();
  }

  onCloseModal() {
    this.swalPracticeModes?.close();
  }
}
