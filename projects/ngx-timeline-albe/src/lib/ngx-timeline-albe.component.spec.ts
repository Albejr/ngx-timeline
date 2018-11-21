import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineAlbeComponent } from './ngx-timeline-albe.component';

describe('NgxTimelineAlbeComponent', () => {
  let component: NgxTimelineAlbeComponent;
  let fixture: ComponentFixture<NgxTimelineAlbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimelineAlbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineAlbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
