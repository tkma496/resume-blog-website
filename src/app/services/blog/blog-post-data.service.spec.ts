import { TestBed } from '@angular/core/testing';
import { BlogPostDataService } from './blog-post-data.service';

describe('BlogPostDataService', () => {
  let service: BlogPostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
