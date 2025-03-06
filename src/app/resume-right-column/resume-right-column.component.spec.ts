import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRightColumnComponent } from './resume-right-column.component';

describe('ResumeRightColumnComponent', () => {
  let component: ResumeRightColumnComponent;
  let fixture: ComponentFixture<ResumeRightColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeRightColumnComponent]
    });
    fixture = TestBed.createComponent(ResumeRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
