import { Component } from '@angular/core';
import '../rxjs-operators';

@Component({
  selector: 'root-component',
  template: `
  <nav-component></nav-component>
  <h1>Binger</h1>
  <router-outlet></router-outlet>
  `
})

export class RootComponent { }
