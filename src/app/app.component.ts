  import { Component, OnInit } from '@angular/core';
  import { TodosService, TODOS} from './todos.service';
  import { Todo } from './todo'

  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
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

      addTodos(): void{
      console.log('addTodos test');
    }

    filter(statusToFilter:any) {
       this.todos = TODOS.filter((todo) => {
        return todo.status === statusToFilter;
      });
  }


  }
