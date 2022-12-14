import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlPrexiInterceptor } from './interceptors/url-prefix.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlPrexiInterceptor,
      multi: true,
    },
  ],
  exports: [],
})
export class CoreModule {}
