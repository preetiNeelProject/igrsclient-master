import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeedBuyerComponent } from './search-deed-buyer.component';

describe('SearchDeedBuyerComponent', () => {
  let component: SearchDeedBuyerComponent;
  let fixture: ComponentFixture<SearchDeedBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDeedBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeedBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
