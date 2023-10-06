import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webToken';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
    this.authService.userSub.subscribe(user =>{
      this.isAuthenticated = user ? true : false
    } )
  }

  logOut(){
    this.authService.userSub.next(null);
    this.router.navigate(['/authorization']);
    localStorage.removeItem('idToken');
    localStorage.removeItem('id');
  }
}
