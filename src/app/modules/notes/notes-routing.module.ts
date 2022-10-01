import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './pages/note-create/note-create.component';
import { NoteEditComponent } from './pages/note-edit/note-edit.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent,
  },
  {
    path: 'add',
    component: NoteCreateComponent,
    data: { breadcrumb: 'Create Note' },
  },
  {
    path: 'edit/:noteId',
    component: NoteEditComponent,
    data: { breadcrumb: 'Edit Note' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
