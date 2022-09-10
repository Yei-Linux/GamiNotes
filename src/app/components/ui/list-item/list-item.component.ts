import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input()
  classname?: string;
  @Input()
  title: string = '';
  @Input()
  titleColor?: string = 'black';
  @Input()
  subtitle: string = '';
  @Input()
  subTitleColor?: string = 'black';
  @Input()
  src?: string = '';
  @Input()
  icon?: string = '';
  @Input()
  type?: 'img' | 'icon' = 'img';
  @Input()
  background?: string = 'white';
  @Input()
  padding?: string = '1rem';
  @Input()
  url?: string | null;
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClickListItem() {
    this.onClick.emit();
  }
}
