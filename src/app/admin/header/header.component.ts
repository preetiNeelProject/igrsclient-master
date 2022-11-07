import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nowTime: string | null | undefined;

  constructor() { 
    setInterval(() => {
      const pipe = new DatePipe('en-US');
      this.nowTime=pipe.transform(new Date(), 'medium'); 
    }, 1);
  }

  ngOnInit(): void {
  }

}
