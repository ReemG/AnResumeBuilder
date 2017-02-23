import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSectionComponent } from './languages-section.component';

describe('LanguagesSectionComponent', () => {
  let component: LanguagesSectionComponent;
  let fixture: ComponentFixture<LanguagesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
