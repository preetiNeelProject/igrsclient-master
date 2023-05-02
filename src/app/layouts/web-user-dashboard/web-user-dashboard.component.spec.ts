import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUserDashboardComponent } from './web-user-dashboard.component';

describe('WebUserDashboardComponent', () => {
  let component: WebUserDashboardComponent;
  let fixture: ComponentFixture<WebUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
