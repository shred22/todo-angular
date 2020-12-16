
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
   // console.log(this.http.get("http://localhost:8080/hello/shreyas"))
    return this.http.get<HelloWorldResponse>(`http://localhost:8080/hello/${name}`)

  }



}

