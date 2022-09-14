import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { practiceModesDummy } from 'src/app/dummy/practiceModes.dummy';
import { PracticeMode } from 'src/app/models/practiceMode.model';

@Component({
  selector: 'app-practice-mode-modal',
  templateUrl: './practice-mode-modal.component.html',
  styleUrls: ['./practice-mode-modal.component.scss'],
})
export class PracticeModeModalComponent implements OnInit {
  @Output()
  onCloseModal: EventEmitter<any> = new EventEmitter();

  practiceModes: PracticeMode[] = practiceModesDummy;

  constructor() {}

  ngOnInit(): void {}

  handleCloseModal() {
    this.onCloseModal.emit();
  }
}
