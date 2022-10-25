import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section23Component } from './section23.component';

describe('Section23Component', () => {
  let component: Section23Component;
  let fixture: ComponentFixture<Section23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
