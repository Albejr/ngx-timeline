import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgxTimelineAlbeComponent } from "./ngx-timeline-albe.component";
import { ReplaceTagDirective } from "./tag-replace.directive";
import { SafeHtmlPipe } from "./safe-html.pipe";

@NgModule({
  declarations: [NgxTimelineAlbeComponent, ReplaceTagDirective, SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [NgxTimelineAlbeComponent],
})
export class NgxTimelineAlbeModule {
  static forRoot(): ModuleWithProviders<NgxTimelineAlbeModule> {
    return {
      ngModule: NgxTimelineAlbeModule,
      providers: [],
    };
  }
  static forChild(): ModuleWithProviders<NgxTimelineAlbeModule> {
    return {
      ngModule: NgxTimelineAlbeModule,
      providers: [],
    };
  }
}
