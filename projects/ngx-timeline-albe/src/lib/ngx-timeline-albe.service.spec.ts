import { TestBed } from '@angular/core/testing';

import { NgxTimelineAlbeService } from './ngx-timeline-albe.service';

describe('NgxTimelineAlbeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTimelineAlbeService = TestBed.get(NgxTimelineAlbeService);
    expect(service).toBeTruthy();
  });
});
