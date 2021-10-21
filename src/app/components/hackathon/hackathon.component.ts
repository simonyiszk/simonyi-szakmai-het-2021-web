import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-hackathon',
	templateUrl: './hackathon.component.html',
	styleUrls: ['./hackathon.component.scss'],
	animations: [
		trigger('openClose', [
			state('true', style({ height: '*' })),
			state('false', style({ height: '0px' })),
			transition('false <=> true', [animate(500)]),
		]),
	],
})
export class HackathonComponent {
	@ViewChild('registerForm')
	regForm!: ElementRef;

	isOpen = false;

	setIsOpen(): void {
		this.isOpen = !this.isOpen;
	}

	closeForm(): void {
		this.isOpen = false;
	}
}
