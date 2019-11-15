import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/__services/auth.service';
import { SignInModel } from 'src/app/__models/signin.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	signinForm : FormGroup;
	submitted:boolean = false;
	isSiginFailed:boolean = false;
	returnUrl:string = null;

	constructor(
		private formBuilder:FormBuilder,
		private authService:AuthService,
		private router:Router,
		private route:ActivatedRoute
	)
	{
		route.queryParams.subscribe(params => {
			if(params['returnUrl'] !== undefined)
			{
				this.returnUrl = params['returnUrl'];
			}
		});
	}

	ngOnInit() 
	{
		this.signinForm = this.formBuilder.group({
			email : ['', [Validators.required, Validators.email]],
			password : ['', [Validators.required]]
		});
	}

	get f() { return this.signinForm.controls; }
	
	onSubmit()
	{
		this.submitted = true;
		if(this.signinForm.valid)
		{
			const email = this.signinForm.controls.email.value;
			const password = this.signinForm.controls.password.value;

			this.authService.signin({email : email, password: password}).subscribe((user) => {
				if(this.returnUrl)
				{
					this.router.navigate([this.returnUrl]);
				}
				else
				{
					this.router.navigate(['/']);
				}
			}, error => {
				this.isSiginFailed = true;
			});
		}
	}
}
