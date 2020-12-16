import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(public id: number,
    public description: String,
    public isDone: boolean,
    public targetDate: Date) { }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(public todoDataService: TodoDataService,
    public router: Router) { }
  todos: Todo []
  message: string
  errorMessage: string

  ngOnInit() {
    this.retrieveAllTodos();
  }

  private retrieveAllTodos() {
    this.todoDataService.getAllTodos()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.todos = response
  }

  handleSuccessfulDeleteResponse(response, id) {
   console.log("deleted...!!!")
   this.message = `Delete of Todo with ID ${id} was Successful .!!`
   this.retrieveAllTodos()
  }

  handleDeleteErrorResponse(error, id) {
    console.log("delete error...!!!")
    this.errorMessage = `Error Occured while Deleting Todo with id ${id}, ` + error.error.message
   }

  deleteTodo(id) {
    console.log(`delete todo  by  Id ${id}`)
      this.todoDataService.deleteTodoById(id).subscribe(
        response => this.handleSuccessfulDeleteResponse(response, id),
        error => this.handleDeleteErrorResponse(error, id)
      )
  }

  updateTodo(id) {
    this.router.navigate(["todos",id])
  }

  addTodo(){
    this.router.navigate(["todos",-1])
  }
}
