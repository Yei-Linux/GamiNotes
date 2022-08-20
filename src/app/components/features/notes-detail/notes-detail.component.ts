import { Component, OnInit } from '@angular/core';
import { CardsToStudy } from 'src/app/dummy/cardsToStudy';
import { CardStudy } from 'src/app/models/cardStudy.model';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit {
  cardsToStudy: CardStudy[] = CardsToStudy;
  constructor() {}

  ngOnInit(): void {}
}
