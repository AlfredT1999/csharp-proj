import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section27Component } from './section27.component';

describe('Section27Component', () => {
  let component: Section27Component;
  let fixture: ComponentFixture<Section27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
