import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-form-modal',
  templateUrl: './note-form-modal.component.html',
  styleUrls: ['./note-form-modal.component.scss'],
})
export class NoteFormModalComponent implements OnInit {
  @Output()
  onCloseModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleCloseModal() {
    this.onCloseModal.emit();
  }
}
