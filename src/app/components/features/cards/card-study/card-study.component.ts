import { Component, Input, OnInit } from '@angular/core';
import { CardStudy } from 'src/app/models/cardStudy.model';
import { Note } from 'src/app/models/pojos/note.model';

@Component({
  selector: 'app-card-study',
  templateUrl: './card-study.component.html',
  styleUrls: ['./card-study.component.scss'],
})
export class CardStudyComponent implements OnInit {
  @Input()
  note: Note = new Note();

  constructor() {}

  ngOnInit(): void {}

  goToNoteForm() {
    return `edit/${this.note._id}`;
  }
}
