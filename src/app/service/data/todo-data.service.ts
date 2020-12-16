import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Todo {
  constructor(public id: number,
    public description: String,
    public isDone: boolean,
    public targetDate: Date) { }

}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  public getAllTodos() {
    console.log("Get All Todos..!")
    return this.http.get<Todo[]>("http://localhost:8080/todos")
  }

  public deleteTodoById(id) {
    return this.http.delete(`http://localhost:8080/todos/shreyas/${id}`)
  }

  public updateTodoById(id, todo) {
    return this.http.put<Todo>(`http://localhost:8080/todos/shreyas/${id}`, todo)
  }

  public getTodoById(id) {
    return this.http.get<Todo>(`http://localhost:8080/todos/shreyas/${id}`)
  }

  public createTodo(todo){
    console.log(`creating todo  ${todo}`)
    return this.http.post(`http://localhost:8080/todos/shreyas`, todo)
  }

}
