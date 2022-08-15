import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDetailComponent } from './components/features/notes-detail/notes-detail.component';
import { NotesHomeComponent } from './components/features/notes-home/notes-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: NotesHomeComponent,
  },
  {
    path: 'topic/:id/notes',
    component: NotesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
