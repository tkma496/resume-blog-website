import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLeftColumnComponent } from './resume-left-column.component';

describe('ResumeLeftColumnComponent', () => {
  let component: ResumeLeftColumnComponent;
  let fixture: ComponentFixture<ResumeLeftColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeLeftColumnComponent]
    });
    fixture = TestBed.createComponent(ResumeLeftColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
