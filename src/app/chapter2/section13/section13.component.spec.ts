import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section13Component } from './section13.component';

describe('Section13Component', () => {
  let component: Section13Component;
  let fixture: ComponentFixture<Section13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
