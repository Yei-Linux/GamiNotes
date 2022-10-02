import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicCreateComponent } from './pages/topic-create/topic-create.component';
import { TopicListComponent } from './pages/topic-list/topic-list.component';
import { TopicsMainComponent } from './pages/topics-main/topics-main.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsMainComponent,
    data: { breadcrumb: 'My Topics' },
    children: [
      {
        path: 'add',
        component: TopicCreateComponent,
        data: { breadcrumb: 'Create' },
      },
      {
        path: '',
        component: TopicListComponent,
        data: { breadcrumb: '' },
      },
      {
        path: ':id/notes',
        loadChildren: () =>
          import('../notes/notes.module').then((m) => m.NotesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsRoutingModule {}
