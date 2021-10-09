import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavComponent implements OnInit {

  isOpen?: boolean;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 680) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  onResize(event: { target: { innerWidth: any; }; }){
    if(event.target.innerWidth > 680) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  changeNav() {
    this.isOpen = !this.isOpen;
  }

}
