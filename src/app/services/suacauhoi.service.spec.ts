import { TestBed, inject } from '@angular/core/testing';

import { SuacauhoiService } from './suacauhoi.service';

describe('SuacauhoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuacauhoiService]
    });
  });

  it('should be created', inject([SuacauhoiService], (service: SuacauhoiService) => {
    expect(service).toBeTruthy();
  }));
});
