import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../__models/book.model';
import { BookService } from '../__services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	book:Book;

	constructor(
		private route:ActivatedRoute,
		private bookService:BookService,
		private router:Router
	) { }
	
	ngOnInit() 
	{
		this.route.paramMap.subscribe(params => {
			let bookId = params.get('bookId');
			this.bookService.getBookInfo(bookId).subscribe(book => this.book = book);
		}, error => {
			this.router.navigate(['/']);
		});
	}
}
