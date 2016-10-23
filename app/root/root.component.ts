import { Component, OnInit } from '@angular/core';
import '../rxjs-operators'

@Component({
  selector: 'root-component',
  template: `
  <div class="flex-container">
    <nav-component *ngIf="!isLanding"></nav-component>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['app/root/root.component.css']
})

export class RootComponent {

  isLanding: boolean;
  constructor() {
  }

  ngOnInit() {
    this.isLanding = (window.location.pathname === '/landing') ? true : false;
  }
}
