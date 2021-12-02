import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")||"[]");
   }

  ngOnInit(): void {
  }
  
  deleteTodo(todo:Todo){
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleCheckTodo(todo: Todo){
    const idx = this.todos.indexOf(todo);
    this.todos[idx].active = !this.todos[idx].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
