import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookImageHoverDirective } from './__directives/book-image-hover.directive';
import { BookComponent } from './book/book.component';
import { UploadBookComponent } from './upload-book/upload-book.component';
import { JwtInterceptor } from './__interceptors/jwt.interceptor';
import { ErrorInterceptor } from './__interceptors/error.interceptor';
import { AuthService } from './__services/auth.service';
import { SearchService } from './__services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavBarComponent,
    BrowseBooksComponent,
    BookPreviewComponent,
    BookImageHoverDirective,
    BookComponent,
    UploadBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    SearchService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
