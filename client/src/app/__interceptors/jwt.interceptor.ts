import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../__services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private authService:AuthService) {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        let currentUser = this.authService.currentUserValue();
        if(currentUser && currentUser.access_token)
        {
            request = request.clone({
                setHeaders : {
                    'Authorization' : `Bearer ${currentUser.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}