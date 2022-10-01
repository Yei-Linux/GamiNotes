import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/types/IBreadcrumb';
import { BreadcrumbStateService } from '../../services/breadcrumb-state.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IBreadcrumb[] = [];

  constructor(private breacrumbState: BreadcrumbStateService) {}

  suscribers() {
    this.breacrumbState.breadcrumb$.subscribe((data) => {
      this.breadcrumbs = data;
    });
  }

  ngOnInit(): void {
    this.suscribers()
  }
}
