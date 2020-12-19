
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class HelloWorldResponse {
  constructor(public message: string) {}
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

   constructor(private http: HttpClient) { }

 public executeHelloService(name) {
    console.log("Hello Service handled ..!")
    return this.http.get<HelloWorldResponse>(`http://localhost:8080/hello/${name}`)
  }

}

