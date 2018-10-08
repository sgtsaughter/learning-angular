import { Component, OnInit } from '@angular/core';
import { todoListItem } from '../../todoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  vm = this;

  todoList = new Array();

  add(name:string) {
    if(name !=="") {
      this.todoList.push(name);
      console.log(this.todoList);
    }
  }

  clear() {
    this.todoList = [];
  }


  constructor() { }
  
  ngOnInit() {
  }

}
