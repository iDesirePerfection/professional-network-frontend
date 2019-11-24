import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsPagesComponent } from './claims-pages.component';

describe('ClaimsPagesComponent', () => {
  let component: ClaimsPagesComponent;
  let fixture: ComponentFixture<ClaimsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
