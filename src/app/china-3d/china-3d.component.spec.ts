import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { China3DComponent } from './china-3d.component';

describe('China3DComponent', () => {
  let component: China3DComponent;
  let fixture: ComponentFixture<China3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ China3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(China3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
