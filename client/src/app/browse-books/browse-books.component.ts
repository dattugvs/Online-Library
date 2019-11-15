import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../__services/search.service';
import { Book } from '../__models/book.model';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css']
})
export class BrowseBooksComponent implements OnInit {
	
	searchForm : FormGroup;
	books:Book[];

	constructor(
		private formBuilder:FormBuilder,
		private bookService:SearchService	
	) { }
	
	ngOnInit() 
	{
		this.searchForm = this.formBuilder.group({
			keyword : [''],
			category : ['All']
		});
	}

	onSubmit()
	{

		if(this.searchForm.valid)
		{
			// console.log(this.searchForm.value);
			const keyword = this.searchForm.value.keyword;
			const category = this.searchForm.value.category;
			
			this.bookService.findBook(keyword, category).subscribe((books:Book[]) => {
				this.books = books;
			});
		}
	}
}
