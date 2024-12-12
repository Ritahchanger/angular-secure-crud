import { TestBed } from '@angular/core/testing';

import { GettodosService } from './gettodos.service';

describe('GettodosService', () => {
  let service: GettodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
