import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { TopicSharedComponent } from './pages/topic-shared/topic-shared.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopicSharedComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    ReactiveFormsModule,

    SweetAlert2Module.forRoot(),
  ],
  exports: [TopicSharedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PublicModule {}
