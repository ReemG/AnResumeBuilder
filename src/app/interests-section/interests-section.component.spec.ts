import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsSectionComponent } from './interests-section.component';

describe('InterestsSectionComponent', () => {
  let component: InterestsSectionComponent;
  let fixture: ComponentFixture<InterestsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
