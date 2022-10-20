import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section19Component } from './section19.component';

describe('Section19Component', () => {
  let component: Section19Component;
  let fixture: ComponentFixture<Section19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
