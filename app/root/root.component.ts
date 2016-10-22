import { Component } from '@angular/core';
import '../rxjs-operators';

@Component({
  selector: 'root-component',
  template: `
  <div class="flex-container">
    <nav-component></nav-component>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['app/root/root.component.css']
})

export class RootComponent { }
