import { TestBed } from '@angular/core/testing';

import { BlogListDataService } from './blog-list-data.service';

describe('BlogListDataService', () => {
  let service: BlogListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
