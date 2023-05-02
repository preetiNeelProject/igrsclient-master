import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-user-menu',
  templateUrl: './web-user-menu.component.html',
  styleUrls: ['./web-user-menu.component.css']
})
export class WebUserMenuComponent implements OnInit {
  username: any;

  constructor(private _router: Router) {
    this.username = 'username'
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }
}
