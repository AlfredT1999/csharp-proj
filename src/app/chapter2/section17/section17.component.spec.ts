import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section17Component } from './section17.component';

describe('Section17Component', () => {
  let component: Section17Component;
  let fixture: ComponentFixture<Section17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
