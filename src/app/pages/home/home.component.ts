import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cmName: string = '';
  constructor() {
    this.cmName = 'श्री भूपेश बघेल';

  }

  ngOnInit(): void {
  }

}
