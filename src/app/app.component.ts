  import { Component } from '@angular/core';

  export class TodoItem{
    name: string;
    status: string;
  }


  const TODOS: TodoItem[] = [
  {name: 'Create a todo list', status: 'New'},
  {name: 'Add multiple list items', status: 'New'},
  {name: 'Change item status to comleted', status: 'Completed'},
  {name: 'Delete item', status: 'New'}
  ];


  @Component({
    selector: 'my-app',
    template: `
    <h1>Todo List</h1>
  <div>
    <input placeholder='What needs to be done'/>
    </div>
    <ul>
    <li *ngFor="let todoItem of todos">
    <p>{{todoItem.name}}</p>
    <p>Status: {{todoItem.status}}</p>
    </li>
    </ul>
   <button *ngFor="let status of statusesSet" (click)="filter(status)">{{status}}</button>
    `,
  })
  export class AppComponent {
    todos: Array;
    statusesSet: Set<string> = new Set<string>();
    constructor() {
      this.todos = TODOS;
      this.todos.forEach((item) => {
        this.statusesSet.add(item.status);
      })
    }

    filter(statusToFilter) {
      this.todos = TODOS.filter((todo) => {
        return todo.status === statusToFilter;
      });
  }





  }
