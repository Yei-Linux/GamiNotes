import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { NotesHomeComponent } from './notes-home/notes-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TextComponent,
    NotesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
