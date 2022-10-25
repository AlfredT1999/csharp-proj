import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section21Component } from './section21.component';

describe('Section21Component', () => {
  let component: Section21Component;
  let fixture: ComponentFixture<Section21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
