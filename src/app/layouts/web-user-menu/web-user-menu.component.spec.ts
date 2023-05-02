import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUserMenuComponent } from './web-user-menu.component';

describe('WebUserMenuComponent', () => {
  let component: WebUserMenuComponent;
  let fixture: ComponentFixture<WebUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebUserMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
