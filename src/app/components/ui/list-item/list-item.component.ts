import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
  @Input()
  src?: string = '';
  @Input()
  background?: string = 'white';
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClickListItem() {
    this.onClick.emit();
  }
}
