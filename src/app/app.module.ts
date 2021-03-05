import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxTimelineAlbeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
