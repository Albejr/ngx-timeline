import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxTimelineAlbeComponent } from './ngx-timeline-albe.component';
import { ReplaceTagDirective } from './tag-replace.directive';
import { SafeHtmlPipe } from './safe-html.pipe';

export const routerModule = RouterModule.forRoot([], {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50] // [x, y]
});

@NgModule({
  declarations: [
    NgxTimelineAlbeComponent,
    ReplaceTagDirective,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    routerModule
  ],
  exports: [NgxTimelineAlbeComponent]
})
export class NgxTimelineAlbeModule { }
