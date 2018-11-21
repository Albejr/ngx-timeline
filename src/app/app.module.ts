import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTimelineAlbeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
