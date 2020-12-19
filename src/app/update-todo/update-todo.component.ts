import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id: number
  todo: Todo
  constructor(private todoDataService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: TodoDataService) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.params['id']
    this.todo =new Todo(this.id, '', false, new Date())
    if(this.id != -1) {
      this.todoDataService.getTodoById(this.id).subscribe(
        response => this.todo = response
      )
    }

  }

  saveTodo(){
    console.log("In save todo id is :"+ this.id)
    if(this.id < 0) {
      console.log("Inside if")
      this.dataService.createTodo(this.todo)
      .subscribe(response => {
        console.log("save response : "+ response)
        this.route.navigate(['todos'])})

    }
    else {
      this.dataService.updateTodoById(this.todo.id, this.todo)
      .subscribe(response => {
        this.todo = response
        this.route.navigate(['todos'])})
    }

  }


}
