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
  themes: Array<string> = ['basic', 'horizontal', 'minimalist', 'mobile', 'vertical'];
  data: Array<TimelineItem>;
  jsonData: any;

  constructor(fb: FormBuilder) {

    this.formulario = fb.group({
      showMenu: [true],
      showGroup: [true],
      sortDesc: [false],
      formatDate: ['dd/MM/yyyy HH:mm:ss'],
      theme: 'vertical'
    });

  }

  ngOnInit() {

    this.data = [
      {
        datetime: new Date('2017-03-29 09:31:45'),
        body: [
          {
            tag: 'div',
            content: '<img src="https://raw.githubusercontent.com/Albejr/jquery-albe-timeline/master/templates/img/girl.png" width="100px" class="img-responsive">'
          },
          {
            tag: 'h2',
            content: 'Sample with image'
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
          }]
      },
      {
        datetime: new Date('2017-04-15'),
        body: [{
          tag: 'p',
          content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      },
      {
        header: 'Sample of header',
        datetime: new Date('2017-03-29 23:59:59'),
        body: [
          {
            tag: 'h1',
            content: "Lorem ipsum"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2017-03-29 13:00:15'),
        body: [
          {
            tag: 'h1',
            content: "Basic content"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
          }]
      },
      {
        datetime: new Date('2019-01-22 15:38:00'),
        body: [{
          tag: 'p',
          content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
        }]
      }
    ];

    this.jsonData = `[{
      "datetime": "2017-03-29 09:31:45",
      "body": [{
          "tag": "div",
          "content": "<img src='https://raw.githubusercontent.com/Albejr/jquery-albe-timeline/master/templates/img/girl.png' width='100px' class='img-responsive'>"
        },
        {
          "tag": "h2",
          "content": "Sample with image"
        },
        {
          "tag": "p",
          "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
        }
      ]
    }, {
      "datetime": "2017-04-15",
      "body": [{
        "tag": "p",
        "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
      }]
    }, {
      "header": "Sample of header",
      "datetime": "2017-03-29 23:59:59",
      "body": [{
          "tag": "h1",
          "content": "Lorem ipsum"
        },
        {
          "tag": "p",
          "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
        }
      ],
      "footer": "Sample of footer. See <a href='https://github.com/Albejr/jquery-albe-timeline' target='_blank'>more details</a>"
    }, {
      "datetime": "2017-03-29 13:00:15",
      "body": [{
          "tag": "h1",
          "content": "Basic content"
        },
        {
          "tag": "p",
          "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
        }
      ]
    }, {
      "datetime": "2019-01-22 15:38:00",
      "body": [{
        "tag": "p",
        "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
      }]
    }]`;
  }

}
