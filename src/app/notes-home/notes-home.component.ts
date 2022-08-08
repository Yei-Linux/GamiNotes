import { Component, OnInit } from '@angular/core';
import { TopicNotes } from '../dummy';
import { CardModel } from '../models';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss'],
})
export class NotesHomeComponent implements OnInit {
  noteCards: CardModel[] = TopicNotes;
  constructor() {}

  ngOnInit(): void {}
}
