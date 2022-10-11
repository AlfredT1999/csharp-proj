import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section16Component } from './section16.component';

describe('Section16Component', () => {
  let component: Section16Component;
  let fixture: ComponentFixture<Section16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
