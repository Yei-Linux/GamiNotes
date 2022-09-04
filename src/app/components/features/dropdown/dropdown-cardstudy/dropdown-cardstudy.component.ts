import { Component, OnInit } from '@angular/core';
import { dropDownCardStudy } from 'src/app/dummy/dropdown/dropdown-card-study.dummy';

@Component({
  selector: 'app-dropdown-cardstudy',
  templateUrl: './dropdown-cardstudy.component.html',
  styleUrls: ['./dropdown-cardstudy.component.scss'],
})
export class DropdownCardstudyComponent implements OnInit {
  dropDownCardStudy = dropDownCardStudy;
  constructor() {}

  ngOnInit(): void {}
}
