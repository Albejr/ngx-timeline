import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTimelineAlbeComponent } from './ngx-timeline-albe.component';
import { ReplaceTagDirective } from './replace-tag.directive';

@NgModule({
  declarations: [
    NgxTimelineAlbeComponent,
    ReplaceTagDirective
  ],
  imports: [CommonModule],
  exports: [NgxTimelineAlbeComponent]
})
export class NgxTimelineAlbeModule { }
