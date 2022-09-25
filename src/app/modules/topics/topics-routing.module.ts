import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicCreateComponent } from './pages/topic-create/topic-create.component';
import { TopicListComponent } from './pages/topic-list/topic-list.component';

const routes: Routes = [
  {
    path: '',
    component: TopicListComponent,
  },
  {
    path: 'add',
    component: TopicCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsRoutingModule {}
