import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestoDashboardComponent } from './festo-dashboard.component';

describe('FestoDashboardComponent', () => {
  let component: FestoDashboardComponent;
  let fixture: ComponentFixture<FestoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
