import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
	private collection: AngularFirestoreCollection;

	registerForm = this.fb.group({
		email: ['', Validators.required, Validators.email],
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		birthDate: ['', Validators.required],
		university: ['', Validators.required],
		programme: ['', Validators.required],
		year: ['', Validators.required],
		skills: [''],
	});

	constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
		this.collection = this.firestore.collection<string[]>('register-test');
	}

	onSubmit(): void {
		console.log('asd');
	}
}
