import { Component, Input, OnInit } from '@angular/core';

export interface TimelineCardProps {
	title: string;
	presenter: string;
	description: string;
	date: string;
	image: string;
}

@Component({
	selector: 'app-timeline-card',
	templateUrl: './timeline-card.component.html',
	styleUrls: ['./timeline-card.component.scss'],
})
export class TimelineCardComponent implements OnInit {
	constructor() {}

	@Input() props: TimelineCardProps = {
		title: 'Timeline Card',
		presenter: 'Timeline Card',
		description: 'This is a timeline card component.',
		date: '2020-01-01',
		image: 'https://picsum.photos/200/300',
	};

	ngOnInit(): void {}
}
