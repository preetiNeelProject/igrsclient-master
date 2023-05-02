import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeedRegistrationComponent } from './search-deed-registration.component';

describe('SearchDeedRegistrationComponent', () => {
  let component: SearchDeedRegistrationComponent;
  let fixture: ComponentFixture<SearchDeedRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDeedRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
