import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn = false;

  login(email: string, password: string): boolean {
    if(email == "luis@gmail.com" && password == "12345") {
      console.log(email == "luis@gmail.com" && password == "12345");
      this.isloggedIn = true;
    }else{
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  isUserLoggedIn() {
    return this.isloggedIn;
  }
}