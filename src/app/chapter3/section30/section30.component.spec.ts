import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section30Component } from './section30.component';

describe('Section30Component', () => {
  let component: Section30Component;
  let fixture: ComponentFixture<Section30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
