import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section20Component } from './section20.component';

describe('Section20Component', () => {
  let component: Section20Component;
  let fixture: ComponentFixture<Section20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
