import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jelentkezes',
	templateUrl: './jelentkezes.component.html',
	styleUrls: ['./jelentkezes.component.scss'],
})
export class JelentkezesComponent {
	formSent = false;
	constructor() {}

	onFormSent(): void {
		this.formSent = true;
	}
}
