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
		name: ['', Validators.required],
		birthDate: ['', Validators.required],
		university: [''],
		programme: [''],
		year: [''],
	});

	constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
		this.collection = this.firestore.collection<string[]>('register-test');
	}

	onSubmit(): void {
		console.log('asd');
	}
}
