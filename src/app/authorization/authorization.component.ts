import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { UserResponse } from '../models/UserResponse';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

  constructor(private authService: AuthServiceService) { }

  logIn(myForm: NgForm): void{
    this.authService.logIn(myForm.value.email, myForm.value.password).subscribe((d: UserResponse) => {
    })
  }

  signUp(myForm: NgForm) {
    this.authService.signUp(myForm.value.email, myForm.value.password).subscribe(d => {
    })
  }
}
