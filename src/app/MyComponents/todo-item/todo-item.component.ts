import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo
  @Input() i!: number
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckedBox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(todo: Todo){
    this.todoDelete.emit(todo);
  }

  onCheckBoxClick(todo: Todo){
    this.todoCheckedBox.emit(todo);
  }
}
