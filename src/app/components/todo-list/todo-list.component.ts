import { Component, OnInit } from "@angular/core";
import { todoListItem } from "../../todoList";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  vm = this;

  todoList = [];

  add(name: string) {
    if (name !== "") {
      this.todoList.push(name);
      console.log(this.todoList);
    }
  }

  clear() {
    this.todoList = [];
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit() {}
}
