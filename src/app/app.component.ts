  import { Component, OnInit } from '@angular/core';
  import { TodosService, TODOS} from './todos.service';
  import { Todo } from './todo';
 // import { TodoStore } from './todo.store';

  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [TodosService]
})

  export class AppComponent implements OnInit{
    statusesSet: Set<string> = new Set<string>();
    constructor(private todosService: TodosService) {}

     getTodos(): void {
        this.todosService.todos.forEach((item) => {
          this.statusesSet.add(item.status);
        })
     }

      ngOnInit(): void {
        this.getTodos();
      }
}
