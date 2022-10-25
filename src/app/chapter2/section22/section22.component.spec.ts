import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section22Component } from './section22.component';

describe('Section22Component', () => {
  let component: Section22Component;
  let fixture: ComponentFixture<Section22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
