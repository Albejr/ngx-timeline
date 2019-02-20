import { Component, OnInit, Input, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { ItemBody, TimelineItem } from './TimelineItem';
import { I18n } from './i18n';

const DEFAULT_OPTIONS: any = {
  effect: 'zoomInUp',
  showGroup: true,
  showMenu: true,
  formatDate: 'dd MMMM',
  language: 'pt-BR',
  sortDesc: true
};

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline-albe.component.html',
  styleUrls: ['./ngx-timeline-albe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTimelineAlbeComponent implements OnInit {

  emptyContent: string;
  lstGroup: Array<any>;

  isSimple: boolean = false;

  //List of itens
  @Input()
  itens: Array<TimelineItem> | String;
  //Effect of presentation
  //'fadeInUp', 'bounceIn', etc
  @Input()
  effect: string = DEFAULT_OPTIONS.effect;
  //Sets the visibility of the annual grouper
  @Input()
  showGroup: boolean = DEFAULT_OPTIONS.showGroup;
  //Sets the anchor menu visibility for annual groupings (depends on 'showGroup')
  @Input()
  showMenu: boolean = DEFAULT_OPTIONS.showMenu;
  //Sets the date display format
  //'dd/MM/yyyy', 'dd de MMMM de yyyy HH:mm:ss', etc
  @Input()
  formatDate: string = DEFAULT_OPTIONS.formatDate;
  //Defines ordering of items
  //true: Descendente
  //false: Ascendente
  @Input()
  sortDesc: boolean = DEFAULT_OPTIONS.sortDesc;

  constructor(@Inject(LOCALE_ID) protected localeID: string) {
  }

  ngOnInit() {

  }

  ngOnChanges() {

    // Se for passado 'string', convert para 'object'.
    if (typeof (this.itens) == 'string') {
      this.itens = JSON.parse(this.itens);
    }

    // Ordena pela data.
    this.itens = (<Array<TimelineItem>>this.itens)
      .sort((a: TimelineItem, b: TimelineItem) => {
        return (this.sortDesc) ?
          ((+new Date(b.datetime)) - (+new Date(a.datetime))) :
          ((+new Date(a.datetime)) - (+new Date(b.datetime)));
      });

    this.lstGroup = this.groupBy(this.itens);

    //Specifies the display language of texts (i18n)
    this.emptyContent = I18n[this.localeID] && I18n[this.localeID].messageForEmptyContent || I18n[DEFAULT_OPTIONS.language].messageForEmptyContent;
  }

  getAnchorID(d: any): string {
    return 'Y' + new Date(d).getFullYear();
  }

  groupBy(colecao: Array<TimelineItem>) {
    var agrupado = [];

    colecao.forEach(i => {

      const d1 = new Date(i.datetime).getFullYear();
      let foiAgrupado = false;

      agrupado.forEach(j => {

        if (d1 == j.Key) {
          j.Elements.push(i);
          foiAgrupado = true;
        }
      });

      if (!foiAgrupado) {
        agrupado.push({
          Key: d1,
          Elements: [i]
        });
      }

    });

    return agrupado;
  }

}
