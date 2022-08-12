import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardNoteComponent } from './components/features/card-note/card-note.component';
import { NotesHomeComponent } from './components/features/notes-home/notes-home.component';

import { CardComponent } from './components/ui/card/card.component';
import { TextComponent } from './components/ui/text/text.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { IconComponent } from './components/ui/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNoteComponent,
    CardComponent,
    TextComponent,
    NotesHomeComponent,
    ButtonComponent,
    IconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
