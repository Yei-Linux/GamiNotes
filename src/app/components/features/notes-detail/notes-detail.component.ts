import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CardsToStudy } from 'src/app/dummy/cardsToStudy';
import { CardStudy } from 'src/app/models/cardStudy.model';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit {
  @ViewChild('SwalPracticeModes')
  swalPracticeModes?: SwalComponent;
  cardsToStudy: CardStudy[] = CardsToStudy;
  constructor() {}

  ngOnInit(): void {}

  goToNoteForm() {
    return `add`;
  }

  handleShowModal() {
    this.swalPracticeModes?.fire();
  }

  onCloseModal() {
    this.swalPracticeModes?.close();
  }
}
