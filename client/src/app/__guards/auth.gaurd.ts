import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../__services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {
	
	constructor(private authService:AuthService, private router:Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
	{
        const currentUser = this.authService.currentUserValue();

        if (currentUser) {
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                this.router.navigate(['/']);
                return false;
            }
 
            return true;
        }

        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
