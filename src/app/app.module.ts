import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GlobalStateService } from './shared/services/global-state.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import './shared/helpers/prototypes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //My Modules
    CoreModule,
    SharedModule,

    //Routing
    AppRoutingModule,

    //Lib Modules
    HttpClientModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent],
  providers: [GlobalStateService],
})
export class AppModule {}
