import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteCreateComponent } from './pages/note-create/note-create.component';
import { NoteEditComponent } from './pages/note-edit/note-edit.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteDropdownComponent } from './components/note-dropdown/note-dropdown.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NotesService } from './services/notes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

const schema = [
  //Pages
  NoteCreateComponent,
  NoteEditComponent,
  NoteListComponent,

  //Components
  NoteCardComponent,
  NoteDropdownComponent,
  NoteFormComponent,
];

@NgModule({
  declarations: schema,
  imports: [
    CommonModule,
    SharedModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: schema,
  schemas: [NO_ERRORS_SCHEMA],
})
export class NotesModule {}
