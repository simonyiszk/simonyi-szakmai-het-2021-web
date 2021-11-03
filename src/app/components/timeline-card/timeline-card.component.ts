import { Component, Input } from '@angular/core';

export interface TimelineCardProps {
	title?: string;
	presenter?: string;
	description?: string;
	date?: string;
	image?: string;
	presenters?: string[];
}

@Component({
	selector: 'app-timeline-card',
	templateUrl: './timeline-card.component.html',
	styleUrls: ['./timeline-card.component.scss'],
})
export class TimelineCardComponent {
	constructor() {}
	@Input() props?: TimelineCardProps;
}
