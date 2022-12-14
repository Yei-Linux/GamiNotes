import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input()
  text: string = '';
  @Input()
  classname: string = '';
  @Input()
  color?: string = 'black';

  isValidText() {
    return this.text;
  }

  constructor() {}

  ngOnInit(): void {}
}
