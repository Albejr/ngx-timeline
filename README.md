# Albe Timeline <sup>1.2.11</sup>

Albe Timeline is a simple yet highly customizable component that helps you render a responsive horizontal (or vertical) timeline from JSON data.

The data will be automatically grouped by year and the events will be sorted by date.

- Content HTML highly manipulable.
- Styles for the template are easily customizable.
- Simplifies the aspects of internationalization, displaying dates and alternatives texts in a local format.

This project use angular version 11.2.4

## Use license
The component is open source and released for free commercial use at no cost. Donations are welcome.

## Installation
```html
$ npm install ngx-timeline-albe
```

## How to use
### Import the module
```typescript
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';

@NgModule({
    imports: [ NgxTimelineAlbeModule ],
    ...
})
export class AppModule {}
```

### Template
```html
<ngx-timeline [itens]="data"></ngx-timeline>
```

### Component
```typescript
import { TimelineItem } from 'ngx-timeline-albe';
```
```typescript
  //The Json object is also accepted in string format.
  data: Array<TimelineItem> | String;
```
```typescript
ngOnInit() {

    //Object type
    this.data = [
      {
        datetime: new Date('2020-03-29 23:59:59'),
        header: 'Sample of header',
        body: [
          {
            tag: 'h1',
            content: "Lorem ipsum"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      }
    ];

    //OR Json format
    this.data = `[{
      "datetime": "2020-03-29 23:59:59",
      "header": "Sample of header",
      "body": [{
          "tag": "h1",
          "content": "Lorem ipsum"
        },
        {
          "tag": "p",
          "content": "Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa."
        }
      ],
      "footer": "Sample of footer. See <a href='https://github.com/Albejr/jquery-albe-timeline' target='_blank'>more details</a>"
    }]`;
  }
```

### Options

| Name           |          | Type                               | Default   | Description                                                                                       |
| -------------- | -------- | ---------------------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| [itens]        | required | `Array<TimelineItem>` or `String Json` | [ ]       | List of itens to be displayed.                                                                    |
| [showGroup]    | optional | Boolean                            | true      | Sets the visibility of the annual grouper. |
| [showMenu]     | optional | Boolean                            | true      | Sets the anchor menu visibility for annual groupings (depends on 'showGroup'). |
| [sortDesc]     | optional | Boolean                            | true      | Defines ordering of items, true: Descendente, false: Ascendente. |
| [formatDate]   | optional | String                             | 'dd MMMM' | Sets the date display format. |
| [language]     | optional | String                             | 'pt-BR'   | Specifies manually the display language of texts (i18n), if the token LocaleID is not configured. |
| [theme]        | optional | String                             | 'basic'   | Defines the style, 'horizontal', 'minimalist', 'mobile', 'vertical'. |

#### TimelineItem Type

| Name     |          | Type              | Description                |
| -------- | -------- | ----------------- | -------------------------- |
| datetime | required | Date              |                            |
| icon     | optional | string            |                            |
| header   | optional | string            |                            |
| body     | required | `Array<ItemBody>` |                            |
| footer   | optional | string            |                            |

#### ItemBody Type

| Name    |          | Type           | Description                |
| ------- | -------- | -------------- | -------------------------- |
| tag     | required | string         |                            |
| content | required | string         |                            |
| attr    | optional | `TagAttribute` |                            |

#### TagAttribute Type

| Name     |          | Type   | Description                |
| -------- | -------- | ------ | -------------------------- |
| href     | optional | string |                            |
| target   | optional | string |                            |
| title    | optional | string |                            |
| src      | optional | string |                            |
| width    | optional | string |                            |
| cssclass | optional | string |                            |

## Html Structure
We'll have a similar result:
```html
<ngx-timeline>
    <div id="timeline-albe" class="clasic">
        <section>
            <header class="group">2020</header>
            <div class="item">
                <div class="badge">
                    <span>29/03</span>
                </div>
                <article>
                    <header>Sample of header</header>
                    <div class="body">
                        <span>2017-03-29 23:59:59</span>
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.</p>
                    </div>
                    <footer>Sample of footer.</footer>
                </article>
                <div class="badge last">
                </div>
            </div>
        </section>
    </div>
<ngx-timeline>
```

## Styling guide

There are several classes that help you to create your custom styles
`app.component.css`
```css
:host ::ng-deep #timeline-albe.minimalist {
  color: inherit;
  font-size: inherit;
  width: inherit;
  margin: 10px;
}
```

## Notes
* The **datetime** element must meet the ISO 8601 standard in year-month-day format "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss"
* Inspired on the plug-in: https://github.com/Albejr/jquery-albe-timeline

## Demo App
Follow these instructions to run the demo:

1. Clone the repository to your local machine
2. From the project folder, run `npm i` to install all required dependencies
3. Run `ng b ngx-timeline-albe` to build in **dist** folder.
4. Run `ng s` to serve the project from a live-updating server.
5. Go to `localhost:4200` to see the demo site
