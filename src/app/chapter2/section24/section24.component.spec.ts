import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section24Component } from './section24.component';

describe('Section24Component', () => {
  let component: Section24Component;
  let fixture: ComponentFixture<Section24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
