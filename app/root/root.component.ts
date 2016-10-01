import { Component } from '@angular/core';
import '../rxjs-operators';

@Component({
  selector: 'root-component',
  template: `
  <div class="flex-container">
    <nav-component></nav-component>
    <h1>Binger</h1>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['app/root/root.component.css']
})

export class RootComponent { }
