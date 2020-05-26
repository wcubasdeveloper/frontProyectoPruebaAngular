import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Web404Component } from './web404.component';

describe('Web404Component', () => {
  let component: Web404Component;
  let fixture: ComponentFixture<Web404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Web404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Web404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
