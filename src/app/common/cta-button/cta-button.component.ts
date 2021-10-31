import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cta-button',
	templateUrl: './cta-button.component.html',
	styleUrls: ['./cta-button.component.scss'],
})
export class CtaButtonComponent implements OnInit {
	constructor() {}

	@Input() route: string | undefined;
	@Input() text: string = '';
	@Input() outline: boolean = false;

	ngOnInit(): void {}
}
