import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export type TVariation = 'general' | 'noheader' | 'nofooter';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  @Input()
  variation?: TVariation = 'general';

  constructor() {}

  ngOnInit(): void {}
}
