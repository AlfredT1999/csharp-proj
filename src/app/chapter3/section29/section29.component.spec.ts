import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section29Component } from './section29.component';

describe('Section29Component', () => {
  let component: Section29Component;
  let fixture: ComponentFixture<Section29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
