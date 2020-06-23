import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmMapComponent } from './fm-map.component';

describe('FmMapComponent', () => {
  let component: FmMapComponent;
  let fixture: ComponentFixture<FmMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
