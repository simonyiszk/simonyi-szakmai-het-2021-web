import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
	selector: 'app-hamarosan',
	templateUrl: './hamarosan.component.html',
	styleUrls: ['./hamarosan.component.scss'],
})
export class HamarosanComponent implements OnInit {
	constructor() {}

	url = environment.url;

	ngOnInit(): void {
		window.scroll(0, 0);
	}
}
