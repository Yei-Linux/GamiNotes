import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteFormComponent } from './components/features/note-form/note-form.component';
import { NotesDetailComponent } from './components/features/notes-detail/notes-detail.component';
import { NotesHomeComponent } from './components/features/notes-home/notes-home.component';
import { TopicFormComponent } from './components/features/topic-form/topic-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: NotesHomeComponent,
  },
  {
    path: 'topic/edit/:id',
    component: TopicFormComponent,
  },
  {
    path: 'topic/add',
    component: TopicFormComponent,
  },
  {
    path: 'topic/:id/notes',
    component: NotesDetailComponent,
  },
  {
    path: 'topic/:id/notes/edit/:cardid',
    component: NoteFormComponent,
  },
  {
    path: 'topic/:id/notes/add',
    component: NoteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
