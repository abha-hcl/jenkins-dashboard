import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDashboardComponent } from './build-dashboard.component';

describe('BuildDashboardComponent', () => {
  let component: BuildDashboardComponent;
  let fixture: ComponentFixture<BuildDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
