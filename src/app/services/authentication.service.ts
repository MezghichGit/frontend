import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "amine" && password === "1234") {  //hardcoded(normalement on va voir comment les récupéerer depuis le backend)
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)   // true or false
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}
