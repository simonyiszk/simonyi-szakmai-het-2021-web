import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import {
	AngularFirestore,
	AngularFirestoreCollection,
	DocumentData,
} from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
	@Input() isOpen = false;

	@Output() formClosed = new EventEmitter();
	@Output() formSent = new EventEmitter();

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

		this.registerForm = fb.group({
			events: fb.group({
				profNight: [false],
				confDayOne: [false],
				confDayTwo: [false],
				birthday: [false],
			}),
			data: fb.group({
				email: [null, [Validators.required, Validators.email]],
				name: [null, Validators.required],
				birthDate: [
					null,
					[
						Validators.required,
						Validators.pattern(
							/^\d{4}.(0[1-9]|1[0-2]).(0[1-9]|[12][0-9]|3[01]).$/,
						),
					],
				],
				university: [null],
				programme: [null],
				year: [null],
				universityOfAdvancedStudies: [null],
			}),
		});
	}

	onSubmit(): void {
		if (!this.registerForm.valid) {
			this.registerForm.updateValueAndValidity();
			this.registerForm.markAllAsTouched();
		} else {
			const eventsGroup = this.registerForm.get('events') as FormGroup;
			const dataGroup = this.registerForm.get('data') as FormGroup;
			const data = {};
			Object.keys(dataGroup.controls).map((key) => {
				//@ts-ignore
				data[key] = dataGroup.get(key)?.value;
			});

			if (eventsGroup.get('profNight')?.value) {
				this.professionalNightCollection.add(data);
			}
			if (
				eventsGroup.get('confDayOne')?.value ||
				eventsGroup.get('confDayTwo')?.value
			) {
				const confData = {
					...data,
					dayOne: eventsGroup.get('confDayOne')?.value,
					dayTwo: eventsGroup.get('confDayTwo')?.value,
				};
				this.miniConfCollection.add(confData);
			}
			if (eventsGroup.get('birthday')?.value) {
				this.birthdayCollection.add(data);
			}

			this.formSent.emit();
			this.formClosed.emit();
		}
	}

	onClose(): void {
		this.formClosed.emit();
	}

	setEventsTouched(): void {
		const eventsGroup = this.registerForm.get('events') as FormGroup;
		eventsGroup.markAllAsTouched();
	}

	get isFormFullWidth(): boolean {
		return this.hostRef?.nativeElement.offsetWidth <= 400;
	}

	get isCheckboxErrorHidden(): boolean {
		const eventsGroup = this.registerForm.get('events') as FormGroup;

		if (!eventsGroup) return true;

		const oneChecked = Object.keys(eventsGroup.controls).find(
			(key) => eventsGroup.controls[key].value !== false,
		);

		const controlsTouched = Object.keys(eventsGroup.controls).find(
			(key) => eventsGroup.controls[key].touched,
		);

		return (!eventsGroup.touched && !controlsTouched) || !!oneChecked;
	}
}
