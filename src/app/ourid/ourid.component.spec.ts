import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuridComponent } from './ourid.component';

describe('OuridComponent', () => {
  let component: OuridComponent;
  let fixture: ComponentFixture<OuridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
