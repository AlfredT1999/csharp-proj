import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section32Component } from './section32.component';

describe('Section32Component', () => {
  let component: Section32Component;
  let fixture: ComponentFixture<Section32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
