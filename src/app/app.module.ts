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
import { TopicFormComponent } from './components/features/topic-form/topic-form.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PracticeModeModalComponent } from './components/features/modals/practice-mode-modal/practice-mode-modal.component';
import { ListItemComponent } from './components/ui/list-item/list-item.component';
import { TooltipModule } from './components/ui/tooltip/tooltip.module';
import { CustomTooltipComponent } from './components/ui/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './components/ui/custom-tooltip/custom-tooltip.directive';
import { DropdownCardnoteComponent } from './components/features/dropdown/dropdown-cardnote/dropdown-cardnote.component';
import { DropdownCardstudyComponent } from './components/features/dropdown/dropdown-cardstudy/dropdown-cardstudy.component';

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
    TopicFormComponent,
    PracticeModeModalComponent,
    ListItemComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
    DropdownCardnoteComponent,
    DropdownCardstudyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
