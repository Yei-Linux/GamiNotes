import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  isBootstrapIcon = true;

  @ViewChild('bootstrapIcon')
  bootstrapIcon: ElementRef = new ElementRef(null);
  @Input()
  variation?: string = 'black';
  @Input()
  identifier: string = 'github';
  @Input()
  className?: string = '';
  @Output()
  onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  //TODO: Verify either is better validation with *ngIf or ngClass
  handleCheckIcon() {
    const element = this.bootstrapIcon?.nativeElement;

    if (!element) return;
    const isBootstrapIcon = window
      .getComputedStyle(element, ':before')
      .getPropertyValue('content');
    this.isBootstrapIcon = isBootstrapIcon !== 'none';
  }

  get isHideBootstrapIcon() {
    return !this.isBootstrapIcon && 'iconiu--hide';
  }

  get isHideCustomIcon() {
    return this.isBootstrapIcon && 'iconiu--hide';
  }

  ngDoCheck() {
    this.handleCheckIcon();
  }

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }
}
