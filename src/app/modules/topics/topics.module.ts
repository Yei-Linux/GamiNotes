import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicCreateComponent } from './pages/topic-create/topic-create.component';
import { TopicListComponent } from './pages/topic-list/topic-list.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicDropdownComponent } from './components/topic-dropdown/topic-dropdown.component';
import { TopicEditModalComponent } from './components/topic-edit-modal/topic-edit-modal.component';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { TopicShareModalComponent } from './components/topic-shared-modal/topic-shared-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const schema = [
  //Pages
  TopicCreateComponent,
  TopicListComponent,

  //Components
  TopicCardComponent,
  TopicDropdownComponent,
  TopicEditModalComponent,
  TopicFormComponent,
  TopicShareModalComponent,
];

@NgModule({
  declarations: schema,
  imports: [
    CommonModule,
    SharedModule,
    TopicsRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: schema,
  schemas: [NO_ERRORS_SCHEMA],
})
export class TopicsModule {}
