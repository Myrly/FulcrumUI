import { TestBed } from '@angular/core/testing';

import { NgxFulcrumUiService } from './ngx-fulcrum-ui.service';

describe('NgxFulcrumUiService', () => {
  let service: NgxFulcrumUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFulcrumUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
