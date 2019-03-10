import { TestBed, inject } from '@angular/core/testing';

import { SuadethiService } from './suadethi.service';

describe('SuadethiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuadethiService]
    });
  });

  it('should be created', inject([SuadethiService], (service: SuadethiService) => {
    expect(service).toBeTruthy();
  }));
});
