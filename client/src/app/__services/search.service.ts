import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../__models/book.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class SearchService {

    constructor(private http: HttpClient) { }

    findBook(keyoword:string, category:string) : Observable<Book[]> {
        const url = `http://localhost:5000/find?keyword=${keyoword}&category=${category}`;
        return this.http.get<Book[]>(url);
    }

}