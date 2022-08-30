import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardNoteComponent } from './components/features/cards/card-note/card-note.component';
import { NotesHomeComponent } from './components/features/notes-home/notes-home.component';

import { CardComponent } from './components/ui/card/card.component';
import { TextComponent } from './components/ui/text/text.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { NotesHeaderComponent } from './components/features/notes-home/notes-header/notes-header.component';
import { NotesDetailComponent } from './components/features/notes-detail/notes-detail.component';
import { TagComponent } from './components/ui/tag/tag.component';
import { CardStudyComponent } from './components/features/cards/card-study/card-study.component';
import { NotesWrapperComponent } from './components/layouts/notes-wrapper/notes-wrapper.component';
import { NoteFormComponent } from './components/features/note-form/note-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/ui/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNoteComponent,
    CardComponent,
    TextComponent,
    NotesHomeComponent,
    ButtonComponent,
    IconComponent,
    NotesHeaderComponent,
    NotesDetailComponent,
    TagComponent,
    CardStudyComponent,
    NotesWrapperComponent,
    NoteFormComponent,
    FormFieldComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
