import {
  ComponentRef,
  ElementRef,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  EmbeddedViewRef,
  Type,
} from '@angular/core';

export class TooltipLogic<T> {
  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private TooltipTypeComponent: Type<T>
  ) {}

  get elementClickRef() {
    return this.elementRef
  }

  get componentRefPub() {
    return this.componentRef
  }

  setTooltipComponentProperties(field: string, value: any) {
    if (!this.componentRef) return;

    this.componentRef.instance[field] = value;
    const { left, right, bottom } =
      this.elementRef.nativeElement.getBoundingClientRect();

    this.componentRef.instance.left = (right - left) / 2 + left;
    this.componentRef.instance.top = bottom;
  }

  createTooltip(field: string, value: any) {
    if (this.componentRef) return;

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.TooltipTypeComponent
      );
    this.componentRef = componentFactory.create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.setTooltipComponentProperties(field, value);
  }

  destroy(): void {
    if (!this.componentRef) return;

    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.componentRef = null;
  }
}
