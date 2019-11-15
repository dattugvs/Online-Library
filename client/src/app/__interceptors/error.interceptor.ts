import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../__services/auth.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService:AuthService) {}

    intercept(request:HttpRequest<any>, next:HttpHandler) : Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if(err.status === 401)
            {
                this.authService.signout();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}