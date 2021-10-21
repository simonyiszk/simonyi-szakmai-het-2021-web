import { FormGroup } from '@angular/forms';

export function atLeastOneCheckboxCheckedValidator(): any {
	return function validate(formGroup: FormGroup) {
		let checked = 0;

		Object.keys(formGroup.controls).forEach((key) => {
			const control = formGroup.controls[key];

			if (control.value) {
				checked++;
			}
		});

		if (checked < 1) {
			return {
				requireCheckboxToBeChecked: true,
			};
		}

		return null;
	};
}
