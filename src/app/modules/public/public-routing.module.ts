import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicSharedComponent } from './pages/topic-shared/topic-shared.component';

const routes: Routes = [
  {
    path: 'topic/:id/notes',
    component: TopicSharedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
