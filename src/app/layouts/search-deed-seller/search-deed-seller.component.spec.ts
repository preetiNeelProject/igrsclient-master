import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeedSellerComponent } from './search-deed-seller.component';

describe('SearchDeedSellerComponent', () => {
  let component: SearchDeedSellerComponent;
  let fixture: ComponentFixture<SearchDeedSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDeedSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeedSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
