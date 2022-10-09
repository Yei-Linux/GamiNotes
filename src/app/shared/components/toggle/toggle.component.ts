import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  static nextIdNumber: number = 0;
  myId?: string;

  @Output()
  handleChange: EventEmitter<boolean> = new EventEmitter();

  toggle: boolean = false;

  generateNewId() {
    this.myId = `toggle-id-${++ToggleComponent.nextIdNumber}`;
  }

  constructor() {
    this.generateNewId();
  }

  ngOnInit(): void {}

  handleToggle(newValue: boolean) {
    this.handleChange.emit(newValue);
  }
}
