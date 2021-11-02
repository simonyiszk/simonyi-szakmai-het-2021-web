import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	host: {
		'(window:resize)': 'onResize($event)',
	},
})
export class NavComponent implements OnInit {
	isOpen?: boolean;

	constructor(
		private viewportScroller: ViewportScroller,
		private router: Router,
	) {}

	url = environment.url;

	ngOnInit(): void {
		if (window.innerWidth <= 768) {
			this.isOpen = false;
		} else {
			this.isOpen = true;
		}
	}

	onResize(event: { target: { innerWidth: any } }) {
		if (event.target.innerWidth > 768) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

	onClick(): void {
		this.isOpen = false;
	}

	changeNav() {
		this.isOpen = !this.isOpen;
	}

	scrollToTop() {
		window.scroll(0, 0);
	}
}
