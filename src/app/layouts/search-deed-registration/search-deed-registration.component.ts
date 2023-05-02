import { Component, OnInit } from '@angular/core';
import { SelectTagProperties } from 'src/app/model/district';

@Component({
  selector: 'app-search-deed-registration',
  templateUrl: './search-deed-registration.component.html',
  styleUrls: ['./search-deed-registration.component.css']
})
export class SearchDeedRegistrationComponent implements OnInit {
  subDistricts: SelectTagProperties[] = [
    { value: 'Bilaspur', viewValue: 'Bilaspur' },
    { value: 'Raipur', viewValue: 'Raipur' },
    { value: 'Durg', viewValue: 'Durg' },
  ];
  queryParam:string='date';
  constructor() { }

  ngOnInit(): void {
  }

}
