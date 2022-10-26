import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section25Component } from './section25.component';

describe('Section25Component', () => {
  let component: Section25Component;
  let fixture: ComponentFixture<Section25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
