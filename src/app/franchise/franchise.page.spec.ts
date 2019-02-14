import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisePage } from './franchise.page';

describe('FranchisePage', () => {
  let component: FranchisePage;
  let fixture: ComponentFixture<FranchisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
