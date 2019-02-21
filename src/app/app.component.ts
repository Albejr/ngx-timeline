import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'projects/ngx-timeline-albe/src';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formulario: FormGroup;
  dateFormats: Array<string> = ['dd MMMM', 'dd/MM/yyyy HH:mm:ss', 'MM/dd/yyyy', 'yyyy/MM/dd'];
  themes: Array<string> = ['basic', 'minimalist', 'vertical', 'horizontal'];
  data: Array<TimelineItem>;

  constructor(fb: FormBuilder) {

    this.formulario = fb.group({
      showMenu: [true],
      showGroup: [true],
      sortDesc: [true],
      formatDate: ['dd MMMM'],
      theme: 'basic'
    });

  }

  ngOnInit() {

    this.data = [
      {
        datetime: new Date('2015-03-29 09:31:45'),
        body: [{
          tag: 'p',
          content: '1 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      },
      {
        datetime: new Date('2015-04-15'),
        body: [{
          tag: 'p',
          content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      },
      {
        datetime: new Date('2015-03-29 23:59:59'),
        body: [{
          tag: 'p',
          content: '3 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
        }],
        footer: 'test of footer'
      },
      {
        datetime: new Date('2015-03-29 13:00:15'),
        body: [{
          tag: 'p',
          content: '2 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      },
      {
        datetime: new Date('2019-01-22 15:38:00'),
        body: [{
          tag: '',
          content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      }
    ];
  }

}
