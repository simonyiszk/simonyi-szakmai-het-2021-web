import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
	constructor() {}

	url = environment.url;
}
