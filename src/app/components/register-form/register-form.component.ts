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
import { uniOfAdvStudies } from './advancedStudies.constants';

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

	list = uniOfAdvStudies;
	accomodation = false;
	isAccomodationDisabled = true;

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
				email: ['', [Validators.required, Validators.email]],
				name: ['', Validators.required],
				birthDate: [
					'',
					[
						Validators.required,
						Validators.pattern(
							/^\d{4}.(0[1-9]|1[0-2]).(0[1-9]|[12][0-9]|3[01]).$/,
						),
					],
				],
				university: [''],
				programme: [''],
				year: [''],
				universityOfAdvancedStudies: [null, Validators.required],
				otherUniOfAdvStudies: [''],
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
				const bdData = { ...data, accomodation: this.accomodation };
				this.birthdayCollection.add(bdData);
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

	get isOtherSelected(): boolean {
		return (
			(this.registerForm.get('data') as FormGroup).get(
				'universityOfAdvancedStudies',
			)?.value === 'Egyéb'
		);
	}

	setAccomodation(): void {
		this.setEventsTouched();
		this.isAccomodationDisabled = !!(
			this.registerForm.get('events') as FormGroup
		).get('birthday')?.value;
		if (this.isAccomodationDisabled) this.accomodation = false;
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

		return !controlsTouched || !!oneChecked;
	}
}
