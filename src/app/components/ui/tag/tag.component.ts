import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input()
  background: string = 'rgb(5, 146, 170)';
  @Input()
  color: string = 'white';

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return {
      background: this.background,
      color: this.color,
    };
  }
}
