import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityPage } from './speciality.page';

describe('SpecialityPage', () => {
  let component: SpecialityPage;
  let fixture: ComponentFixture<SpecialityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
