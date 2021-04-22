import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  public registerCandidate(candidate: Candidate){
    console.log(`creating todo  ${todo}`)
    return this.http.post(`http://localhost:8080/todos/shreyas`, todo)
  }

}
