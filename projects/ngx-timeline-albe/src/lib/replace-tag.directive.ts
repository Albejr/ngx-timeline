import { Directive, Input, TemplateRef, ViewContainerRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[replaceTag]'
})
export class ReplaceTagDirective implements AfterViewChecked {
  private _tag: string;
  private _needUpdate: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('replaceTag')
  set tag(t: string) {

    this._tag = (!t) ? 'span' : t;
    this._needUpdate = true;

    this.viewContainer.clear();

    let template = this.templateRef.elementRef.nativeElement.nextElementSibling;

    if (template) {
      this.templateRef.elementRef.nativeElement.parentNode.removeChild(template);
    }

    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  ngAfterViewChecked() {
    if (this._needUpdate) {
      this._updateTemplate();
      this._needUpdate = false;
    }
  }

  private _updateTemplate() {
    let template = this.templateRef.elementRef.nativeElement.nextElementSibling;

    if (template) {
      let r = document.createElement(this._tag);
      r.innerHTML = template.innerHTML;

      this.templateRef.elementRef.nativeElement.parentNode.replaceChild(r, template);
      this.templateRef.elementRef.nativeElement.innerHTML = template.innerHTML;
    }
  }

}