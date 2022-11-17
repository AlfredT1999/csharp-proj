import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section31Component } from './section31.component';

describe('Section31Component', () => {
  let component: Section31Component;
  let fixture: ComponentFixture<Section31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
