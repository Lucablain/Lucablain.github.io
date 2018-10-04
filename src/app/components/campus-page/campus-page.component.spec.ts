import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPageComponent } from './campus-page.component';

describe('CampusPageComponent', () => {
  let component: CampusPageComponent;
  let fixture: ComponentFixture<CampusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
