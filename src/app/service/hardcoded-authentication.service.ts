import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === "shreyas" && password === "password") { 
      sessionStorage.setItem("authenticatedUser", username)
      return true
  }
    return false
}

  public isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
    
  }

  public logout() {
    sessionStorage.removeItem("authenticatedUser")
  }

}