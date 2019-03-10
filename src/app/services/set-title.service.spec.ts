import { TestBed, inject } from '@angular/core/testing';

import { SetTitleService } from './set-title.service';

describe('SetTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetTitleService]
    });
  });

  it('should be created', inject([SetTitleService], (service: SetTitleService) => {
    expect(service).toBeTruthy();
  }));
});
