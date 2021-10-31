import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

	constructor(private viewportScroller: ViewportScroller) {}

	ngOnInit(): void {
		if (window.innerWidth <= 640) {
			this.isOpen = false;
		} else {
			this.isOpen = true;
		}
	}

	onResize(event: { target: { innerWidth: any } }) {
		if (event.target.innerWidth > 640) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

	onClick(elementId: string): void {
		this.viewportScroller.scrollToAnchor(elementId);
	}

	changeNav() {
		this.isOpen = !this.isOpen;
	}
}
