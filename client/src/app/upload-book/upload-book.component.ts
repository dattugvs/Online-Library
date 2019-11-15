import { Component, OnInit } from '@angular/core';
import { BookService } from '../__services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {

	uploadBookForm:FormGroup;
	submitted:boolean = false;

	constructor(
		private bookService:BookService, 
		private formBuilder:FormBuilder,
		private router:Router
	) { }

	ngOnInit() 
	{
		this.uploadBookForm = this.formBuilder.group({
			title:['',Validators.required],
			author:['', Validators.required],
			language:['',Validators.required],
			price : ['0', [Validators.required,Validators.min(0)]],
			link : ['', Validators.required]
		});
	}

	get f() { return this.uploadBookForm.controls; }

	onSubmit()
	{
		this.submitted = true;
		if(this.uploadBookForm.valid)
		{
			this.bookService.upload(this.uploadBookForm.value).subscribe(res => {
				this.router.navigate(['/browse']);
			}, err => {
				alert("Book upload failed");
			});
		}
	}
}
