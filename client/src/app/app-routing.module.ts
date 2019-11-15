import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BookComponent } from './book/book.component';
import { AuthGaurd } from './__guards/auth.gaurd';
import { Role } from './__models/role.model';
import { UploadBookComponent } from './upload-book/upload-book.component';


const routes: Routes = [
	{ 
		path : '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},
	{ 
		path : 'home',
		component : HomeComponent
	},
  	{
		path : 'browse',
		component :BrowseBooksComponent
	},
	{ 
		path : 'book/:bookId', 
		component:BookComponent,
		canActivate : [AuthGaurd],
		data : {roles:[Role.Admin, Role.User]}
	},
	{
		path : 'upload',
		component: UploadBookComponent,
		canActivate : [AuthGaurd],
		data : {roles:[Role.Admin]}
	},
	{ 
		path : 'signin',  
		component : SigninComponent
	},
	{ 
		path : 'signup',  
		component : SignupComponent
	},
	{ 
		path: '**', component: HomeComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
