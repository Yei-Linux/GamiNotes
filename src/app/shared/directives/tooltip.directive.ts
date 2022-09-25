import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';
import { TooltipLogic } from 'src/app/core/models/shared/Tooltip.model';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

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
