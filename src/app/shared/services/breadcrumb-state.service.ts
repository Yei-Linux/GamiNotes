import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { IBreadcrumb } from 'src/app/core/types/IBreadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbStateService {
  private readonly _breadcrumb$ = new BehaviorSubject<IBreadcrumb[]>([]);

  get breadcrumb$() {
    return this._breadcrumb$.asObservable();
  }

  updateBreadcrumb(breadcrumbs: IBreadcrumb[]) {
    this._breadcrumb$.next(breadcrumbs);
  }

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root: ActivatedRouteSnapshot =
          this.router.routerState.snapshot.root;

        const breadcrumbs: IBreadcrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        this.updateBreadcrumb(breadcrumbs);
      });
  }

  private getLabel(data: Data) {
    try {
      return typeof data['breadcrumb'] === 'function'
        ? data['breadcrumb'](data)
        : data['breadcrumb'];
    } catch (error) {
      console.warn(`Error making label: ${error}`);
      return '';
    }
  }

  addBreadcrumb(
    route: ActivatedRouteSnapshot | null,
    parentUrl: string[],
    breadcrumbs: IBreadcrumb[]
  ) {
    if (!route) return;

    const routeUrl = parentUrl.concat(route.url.map(({ path }) => path));

    if (route.data['breadcrumb']) {
      const breadcrumb = {
        label: this.getLabel(route.data),
        url: `/${routeUrl.join('/')}`,
      };
      breadcrumbs.push(breadcrumb);
    }

    this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
  }
}
