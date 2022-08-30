import { TestBed } from '@angular/core/testing';

import { TranslatedSentenceService } from './translated-sentence.service';

describe('TranslatedSentenceService', () => {
  let service: TranslatedSentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatedSentenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
