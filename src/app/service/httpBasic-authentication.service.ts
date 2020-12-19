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
export class HttpBasicAuthenticationService {

  constructor(private httpClient:HttpClient) { }


  public executeAuthService(username, password) {

    console.log(`Sending Auth service with creds ${username} and  ${password}`)
    let basicAuthHeaderString = 'Basic '+window.btoa(username+":"+password)

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log(`encoded headers: ${headers.keys()}`)
    return this.httpClient.get<BasicAuthResponse>(`http://localhost:8080/basicAuth`, {headers})
    .pipe(map(data =>  {
      console.log("In Pipe")
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem("token", basicAuthHeaderString);
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
