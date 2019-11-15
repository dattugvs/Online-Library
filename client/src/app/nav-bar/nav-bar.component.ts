import { Component, OnInit } from '@angular/core';
import { AuthService } from '../__services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
	
	constructor(private authService:AuthService, private router:Router) { }

	signout()
	{
		this.authService.signout();
		this.router.navigate(['/']);
	}
}
