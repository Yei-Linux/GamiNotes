import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  TemplateRef,
} from '@angular/core';
import { TooltipLogic } from 'src/app/models/tooltip.model';
import { CustomTooltipComponent } from './custom-tooltip.component';

@Directive({
  selector: '[componentTooltip]',
})
export class CustomTooltipDirective extends TooltipLogic<CustomTooltipComponent> {
  @Input()
  componentTooltip: TemplateRef<any> | null = null;

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
      CustomTooltipComponent
    );
  }

  isClickInTooltipSelector(targetSelected: any) {
    const isClick =
      this.elementClickRef?.nativeElement.contains(targetSelected);

    return isClick;
  }

  isOutsideFromTooltip(targetSelected: any) {
    const isOutSide =
      !this.componentRefPub?.instance.elementRefPub.nativeElement.contains(
        targetSelected
      );

    return isOutSide;
  }

  @HostListener('click')
  click(): void {
    if (this.componentRefPub) {
      this.destroy();
      return;
    }
    this.createTooltip('componentTooltip', this.componentTooltip);
  }

  //TODO: Improve this hostlistener
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.componentRefPub) return;
    const targetSelected = event.target;

    const isClickInSelector = this.isClickInTooltipSelector(targetSelected);
    if (isClickInSelector) return;

    const isOutside = this.isOutsideFromTooltip(targetSelected);
    if (!isOutside) return;

    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
