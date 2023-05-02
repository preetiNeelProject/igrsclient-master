import { Component, OnInit } from '@angular/core';
import { SelectTagProperties } from 'src/app/model/district';

@Component({
  selector: 'app-search-deed-buyer',
  templateUrl: './search-deed-buyer.component.html',
  styleUrls: ['./search-deed-buyer.component.css']
})
export class SearchDeedBuyerComponent implements OnInit {
  subDistricts: SelectTagProperties[] = [
    { value: 'Bilaspur', viewValue: 'Bilaspur' },
    { value: 'Raipur', viewValue: 'Raipur' },
    { value: 'Durg', viewValue: 'Durg' },
  ];

  villages: SelectTagProperties[] = [
    { value: 'Bilaspur', viewValue: 'Bilaspur' },
    { value: 'Raipur', viewValue: 'Raipur' },
    { value: 'Durg', viewValue: 'Durg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
