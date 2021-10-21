import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { atLeastOneCheckboxCheckedValidator } from 'src/app/validators/at-least-on.validator';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
	@Input() isOpen = false;

	@Output() formClosed = new EventEmitter();

	private professionalNightCollection: AngularFirestoreCollection;
	private miniConfCollection: AngularFirestoreCollection;
	private birthdayCollection: AngularFirestoreCollection;

	registerForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private firestore: AngularFirestore,
		readonly hostRef: ElementRef,
	) {
		this.professionalNightCollection =
			this.firestore.collection('szakmai-est-test');
		this.miniConfCollection = this.firestore.collection('minikonf-test');
		this.birthdayCollection = this.firestore.collection('szulinap-test');

		this.registerForm = fb.group(
			{
				events: fb.group(
					{
						profNight: [false],
						confDayOne: [false],
						confDayTwo: [false],
						birthday: [false],
					},
					{ atLeastOneCheckboxCheckedValidator },
				),
				data: fb.group({
					email: [null, [Validators.required, Validators.email]],
					name: [null, Validators.required],
					birthDate: [null, Validators.required],
					university: [null],
					programme: [null],
					year: [null],
					universityOfAdvancedStudies: [null],
				}),
			},
			{ updateOn: 'submit' },
		);
	}

	onSubmit(): void {
		if (!this.registerForm.valid) {
			this.registerForm.updateValueAndValidity();
			this.registerForm.markAllAsTouched();
		}
	}

	onClose(): void {
		this.formClosed.emit();
	}

	get isFormFullWidth(): boolean {
		return this.hostRef?.nativeElement.offsetWidth <= 400;
	}

	get isCheckboxValid(): boolean {
		return !!this.registerForm.get('events')?.valid;
	}
}
