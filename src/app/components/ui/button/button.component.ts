import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  variation: string = 'primary';
  @Input()
  icon?: string;
  @Input()
  iconPosition?: 'before' | 'after' = 'before';
  @Input()
  type?: 'button' | 'submit' = 'button';
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }

  hasIcon(position: 'before' | 'after'): boolean {
    return (
      position === this.iconPosition &&
      this.icon !== null &&
      this.icon !== undefined
    );
  }
}
