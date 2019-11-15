import { Component, OnInit } from '@angular/core';
import { BookService } from '../__services/book.service';
import { Book } from '../__models/book.model';
import { AuthService } from '../__services/auth.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

	books:Book[] = null;
	constructor(private bookService:BookService, private authServie:AuthService) { }

	ngOnInit() 
	{
		const userId = this.authServie.currentUserValue().email; // temporary purpose
		this.bookService.getUserSavedBooks(userId).subscribe(books => {
			this.books = books;
		},error => {
			alert("Failed to load books. Reload and try !!");
		});
	}
}
