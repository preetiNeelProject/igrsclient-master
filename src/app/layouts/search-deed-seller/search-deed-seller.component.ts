import { Component, OnInit } from '@angular/core';
import { SelectTagProperties } from 'src/app/model/district';

@Component({
  selector: 'app-search-deed-seller',
  templateUrl: './search-deed-seller.component.html',
  styleUrls: ['./search-deed-seller.component.css']
})
export class SearchDeedSellerComponent implements OnInit {

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
