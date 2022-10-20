import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section18Component } from './section18.component';

describe('Section18Component', () => {
  let component: Section18Component;
  let fixture: ComponentFixture<Section18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
