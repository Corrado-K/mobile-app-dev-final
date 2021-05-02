import { TestBed } from '@angular/core/testing';

import { ElectionCandidatesService } from './election-candidates.service';

describe('ElectionCandidatesService', () => {
  let service: ElectionCandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionCandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
