import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { SignInModel } from '../__models/signin.model';
import { SignUpModel } from '../__models/signup.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../__models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	currentUserSubject:BehaviorSubject<User>;
	currentUser:Observable<User>;
	
	constructor(private http:HttpClient) 
	{
		this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	signin(signInModel:SignInModel)
	{
		return this.http.post<User>('http://localhost:5000/signin', signInModel)
				.pipe(map(user => {
					if(user && user.access_token) {
						localStorage.setItem('currentUser', JSON.stringify(user));
						this.currentUserSubject.next(user);
					}
					return user;
				}));
	}

	currentUserValue():User {
		return this.currentUserSubject.value;
	}

	isAuthenticated():boolean {
		return this.currentUserValue() !== null;
	}

	signup(signupModel:SignUpModel)
	{
		return this.http.post<any>('http://localhost:5000/signup', signupModel);
	}

	signout() 
	{
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}
