import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelHeaderComponent } from './middel-header.component';

describe('MiddelHeaderComponent', () => {
  let component: MiddelHeaderComponent;
  let fixture: ComponentFixture<MiddelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
