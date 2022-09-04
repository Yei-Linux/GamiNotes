import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';
import { TooltipLogic } from 'src/app/models/tooltip.model';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective extends TooltipLogic<TooltipComponent> {
  @Input()
  tooltip = '';

  constructor(
    elementRef: ElementRef,
    appRef: ApplicationRef,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
  ) {
    super(
      elementRef,
      appRef,
      componentFactoryResolver,
      injector,
      TooltipComponent
    );
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.createTooltip('tooltip', this.tooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
