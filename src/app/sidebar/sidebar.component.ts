import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface UserDetails {
	name: FormControl<string>;
	email: FormControl<string>;
}

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
	signUpForm = new FormGroup<UserDetails>({
		name: new FormControl('', { nonNullable: true, validators: Validators.required }),
		email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email]}),
	});

	get name() {
		return this.signUpForm.get('name');
	}

  get email(){
    return this.signUpForm.get("email");
  }

	constructor() {}

	alertSignUp() {
		if (this.signUpForm.valid) {
			alert(`Signed up user ${this.signUpForm.value.name} with email ${this.signUpForm.value.email}`);
			window.location.reload();
		}
	}

	ngOnInit(): void {}
}
