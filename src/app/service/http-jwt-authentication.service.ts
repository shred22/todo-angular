import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

export class BasicAuthResponse {
  constructor(public message:string) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpJWTAuthenticationService {

  constructor(private httpClient:HttpClient) { }


  public executeJWTAuthService(username, password) {

    console.log(`JWT Auth `)
    return this.httpClient.post<any>(`http://localhost:8080/authenticate`, {username,
  password})
    .pipe(map(data =>  {
      console.log("In Pipe")
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem("token", `Bearer ${data.token}`);
      return data;
    }))

  }

  public isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)

  }

  public logout() {
    sessionStorage.removeItem("authenticatedUser")
  }

  public getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  public getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

}
