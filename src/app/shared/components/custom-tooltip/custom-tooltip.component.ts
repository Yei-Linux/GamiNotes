import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss'],
})
export class CustomTooltipComponent implements OnInit {
  componentTooltip: TemplateRef<any> | null = null;
  elementRefPub: ElementRef | null = null;
  left: number = 0;
  top: number = 0;

  constructor(private elementRef: ElementRef) {
    this.elementRefPub = elementRef;
  }

  ngOnInit(): void {}
}
