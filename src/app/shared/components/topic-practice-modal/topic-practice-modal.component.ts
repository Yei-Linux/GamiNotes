import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { practiceModes } from 'src/app/core/constants/generic.constants';
import { PracticeMode } from 'src/app/core/models/generic/PracticeMode.model';

@Component({
  selector: 'app-topic-practice-modal',
  templateUrl: './topic-practice-modal.component.html',
  styleUrls: ['./topic-practice-modal.component.scss'],
})
export class TopicPracModal implements OnInit {
  @Output()
  onCloseModal: EventEmitter<any> = new EventEmitter();

  practiceModes: PracticeMode[] = practiceModes;

  constructor() {}

  ngOnInit(): void {}

  handleCloseModal() {
    this.onCloseModal.emit();
  }
}
