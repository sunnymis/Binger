import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: 'app/nav/nav.component.html',
  styleUrls: ['app/nav/nav.component.css']
})
export class NavComponent implements OnInit {

    overlayEnabled: boolean = false;
  constructor() {  }

  ngOnInit() {}

  openOverlay(event) {
    this.overlayEnabled = true;
  }

  handleOverlayEmitter(event) {
    this.overlayEnabled = event;
  }


}
