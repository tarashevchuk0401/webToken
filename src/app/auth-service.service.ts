import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval, tap } from 'rxjs';
import { UserResponse } from './models/UserResponse';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService   {
  API_KEY: string = 'AIzaSyA9-y-h3xYHlM9YFjyCoJ139KS4J6SB-Ow';
  userSub = new BehaviorSubject<any>(null);
  user: User | undefined;

  constructor(private http: HttpClient) {
    // interval(1000).subscribe(d => console.log(d))


    let token = localStorage.getItem('idToken')
    if(token){
      this.userSub.next(token);
    } else {
      this.userSub.next(null);
    }
   }


  //    AUTH

  private handleUser(response: UserResponse) {
    const expireDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
     this.user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate)
    this.userSub.next(this.user.token);
    localStorage.setItem('idToken', response.idToken)

  }

  logIn(email: string, password: string): Observable<UserResponse> {
    console.log(email, password)
    return this.http.post<UserResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9-y-h3xYHlM9YFjyCoJ139KS4J6SB-Ow`, { email, password, returnSecureToken: true })
      .pipe(tap(this.handleUser.bind(this)))
  }

  signUp(email: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9-y-h3xYHlM9YFjyCoJ139KS4J6SB-Ow`, { email, password, returnSecureToken: true })
      .pipe(tap(this.handleUser.bind(this)))
  }


  //////////////      Add post to DB

  addPost(text: string){
  return  this.http.post('https://test2-8d29c-default-rtdb.europe-west1.firebasedatabase.app/1.json', {text})
  }


}
