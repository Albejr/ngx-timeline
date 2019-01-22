import { Component, OnInit, Input } from '@angular/core';
import { ItemBody, TimelineItem } from './TimelineItem';
import { I18n } from './i18n';

const DEFAULT_OPTIONS: any = {
  effect: 'zoomInUp',
  showGroup: true,
  showMenu: true,
  language: 'pt-BR',
  formatDate: 'dd MMMM',
  sortDesc: true
};

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline-albe.component.html',
  styleUrls: ['./ngx-timeline-albe.component.scss']
})
export class NgxTimelineAlbeComponent implements OnInit {

  emptyContent: string;

  //List of itens
  @Input() 
  itens: Array<TimelineItem>;
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
  //Specifies the display language of texts (i18n)
  @Input() 
  language: string = DEFAULT_OPTIONS.language;
  //Sets the date display format
  //'dd/MM/yyyy', 'dd de MMMM de yyyy HH:mm:ss', etc
  @Input() 
  formatDate: string = DEFAULT_OPTIONS.formatDate;
  //Defines ordering of items
  //true: Descendente
  //false: Ascendente
  @Input() 
  sortDesc: boolean = DEFAULT_OPTIONS.sortDesc;

  constructor() {
  }

  ngOnInit() {
    this.itens = this.itens.sort((a, b) => {
      return (this.sortDesc) ?
        (Date.parse(b['datetime']) - Date.parse(a['datetime'])) :
        (Date.parse(a['datetime']) - Date.parse(b['datetime']));
    });
  }

  ngOnChanges() {
    this.emptyContent = I18n[this.language].messageForEmptyContent;
  }

  trackByFnBody(index: number, item: ItemBody) {
    console.log(`<${item.tag}>${item.content}</${item.tag}>`);

    return index;
  }

}
