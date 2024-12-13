import { TestBed } from '@angular/core/testing';

import { CreatetaskService } from './createtask.service';

describe('CreatetaskService', () => {
  let service: CreatetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
