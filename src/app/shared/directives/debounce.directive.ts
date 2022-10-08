import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[debounce]',
})
export class DebounceDirective {
  @Input()
  debounceTime = 300;
  @Output()
  debounceClick = new EventEmitter();

  private clicks = new Subject();
  private suscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    this.suscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any) {
    this.clicks.next(event);
  }
}
