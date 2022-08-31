import { Component, Input, OnInit } from '@angular/core';
import { CardStudy } from 'src/app/models/cardStudy.model';

@Component({
  selector: 'app-card-study',
  templateUrl: './card-study.component.html',
  styleUrls: ['./card-study.component.scss'],
})
export class CardStudyComponent implements OnInit {
  @Input()
  card: CardStudy = new CardStudy();

  constructor() {}

  ngOnInit(): void {}

  goToNoteForm() {
    return `edit/${this.card.id}`;
  }
}
