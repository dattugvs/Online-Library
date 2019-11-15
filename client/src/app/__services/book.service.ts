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

    getUserSavedBooks(userId:string):Observable<Book[]> {
        const url  = `http://localhost:5000/mybooks`;
        return this.http.post<Book[]>(url, {userId:userId});
    }

    upload(book:Book):Observable<any> {
        const url = `http://localhost:5000/upload`;
        return this.http.post<any>(url, book);
    }
}