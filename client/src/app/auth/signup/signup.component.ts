import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/__services/auth.service';
import { SignUpModel } from 'src/app/__models/signup.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	
	signupForm:FormGroup;
	submitted:boolean = false;
	signupFailed:boolean = false;
	constructor(
		private formBuilder:FormBuilder, 
		private router:Router,
		private authService:AuthService
	) { }
	
	ngOnInit() 
	{
		this.signupForm = this.formBuilder.group({
			firstName 		: ['', Validators.required],
			lastName  		: ['', Validators.required],
			email			: ['', [Validators.required, Validators.email]],
			password		: ['', [Validators.required, Validators.minLength(6)]],
			confirmPassword	: ['', Validators.required]
		}, {
			validators : this.checkIfPasswordMatch()
		});
	}

	get f() { return this.signupForm.controls;}

	onSubmit()
	{
		this.submitted = true;

		if(this.signupForm.valid)
		{
			let signupModel:SignUpModel = {
				firstName : this.signupForm.value.firstName,
				lastName : this.signupForm.value.lastName,
				email : this.signupForm.value.email,
				password : this.signupForm.value.password,
				confirmPassword : this.signupForm.value.confirmPassword
			}
			this.authService.signup(signupModel).subscribe(res => {
				this.router.navigate(['/signin']);
			}, err => {
				this.signupFailed = true;
			})
		}
	}

	checkIfPasswordMatch() 
	{
		return(formGroup : FormGroup) => {
			const passwordControl = formGroup.controls['password'];
			const confirmPasswordControl = formGroup.controls['confirmPassword'];

			if(passwordControl.value !== confirmPasswordControl.value)
			{
				confirmPasswordControl.setErrors({mustMatch : true});
			}
		}
	}

}
