import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentsSectionComponent } from './achievments-section.component';

describe('AchievmentsSectionComponent', () => {
  let component: AchievmentsSectionComponent;
  let fixture: ComponentFixture<AchievmentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievmentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievmentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
