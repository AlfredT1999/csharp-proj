import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section28Component } from './section28.component';

describe('Section28Component', () => {
  let component: Section28Component;
  let fixture: ComponentFixture<Section28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
