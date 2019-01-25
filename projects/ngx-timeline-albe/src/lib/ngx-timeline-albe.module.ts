import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxTimelineAlbeComponent } from './ngx-timeline-albe.component';
import { ReplaceTagDirective } from './replace-tag.directive';

@NgModule({
  declarations: [
    NgxTimelineAlbeComponent,
    ReplaceTagDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 50] // [x, y]
    })
  ],
  exports: [NgxTimelineAlbeComponent]
})
export class NgxTimelineAlbeModule { }
