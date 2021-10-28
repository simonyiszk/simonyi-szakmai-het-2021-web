import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-register-form-button',
	templateUrl: './register-form-button.component.html',
	styleUrls: ['./register-form-button.component.scss'],
	animations: [
		trigger('openClose', [
			state('true', style({ height: '*' })),
			state('false', style({ height: '0px' })),
			transition('false <=> true', [animate(500)]),
		]),
	],
})
export class RegisterFormButtonComponent {
	@ViewChild('registerForm')
	regForm!: ElementRef;

	isOpen = false;
	isFormSent = false;

	setIsOpen(): void {
		this.isOpen = !this.isOpen;
	}

	closeForm(): void {
		this.isOpen = false;
	}
}
