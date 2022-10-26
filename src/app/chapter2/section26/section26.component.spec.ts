import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section26Component } from './section26.component';

describe('Section26Component', () => {
  let component: Section26Component;
  let fixture: ComponentFixture<Section26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
