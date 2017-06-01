  import { Component, OnInit } from '@angular/core';
  import { TodosService} from './todos.service';
  import { Todo } from './todo'
  import { TODOS } from './mock-todos';

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
   providers: [TodosService]
  })

  export class AppComponent implements OnInit{
    todos: Todo[];
    statusesSet: Set<string> = new Set<string>();


    constructor(private todosService: TodosService) {

    }

     getTodos(): void {
        this.todosService.getTodos().then(todos => {
          this.todos = todos;
          this.todos.forEach((item) => {
          this.statusesSet.add(item.status);
        })
      });
     }

      ngOnInit(): void {
        this.getTodos();
      }

    filter(statusToFilter) {
       this.todos = TODOS.filter((todo) => {
        return todo.status === statusToFilter;
      });
  }


  }
