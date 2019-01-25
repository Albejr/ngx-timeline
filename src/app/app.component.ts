import { Component } from '@angular/core';
import { TimelineItem } from 'projects/ngx-timeline-albe/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: Array<TimelineItem> = [
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
    }
    ,
    {
      datetime: new Date('2019-01-22 15:38:00'),
      body: [{
        tag: '',
        content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
      }]
    }
  ];
}
