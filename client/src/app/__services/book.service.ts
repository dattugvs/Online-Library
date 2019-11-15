import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../__models/book.model';

@Injectable({
    providedIn:'root'
})
export class BookService {
    
    constructor(private http:HttpClient) {}

    getBookInfo(bookId:string):Observable<Book> {
        const url = `http://localhost:5000/book?bookId=${bookId}`;
        return this.http.get<Book>(url);
    }
}