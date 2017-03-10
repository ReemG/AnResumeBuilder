import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinallResumeComponent } from './finall-resume.component';

describe('FinallResumeComponent', () => {
  let component: FinallResumeComponent;
  let fixture: ComponentFixture<FinallResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinallResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinallResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
