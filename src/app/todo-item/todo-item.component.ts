import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  {{ item.title }}
    <p>
      todo-item works!
    </p>
  </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  constructor() { }

  ngOnInit(): void {
  }

}
