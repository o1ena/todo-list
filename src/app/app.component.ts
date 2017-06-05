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
    todos: Todo[];
    statusesSet: Set<string> = new Set<string>();
    constructor(private todosService: TodosService) {}

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


      addTodoItem(newTodo: string){
        this.todos.push(newTodo);
        console.log('added');
    }

    deleteTodoItem(name: string) : void {
    var index = this.todos.indexOf(name, 0);
    if (index !== undefined) {
     this.todos.splice(index, 1);
  }
}

  deleteSelectedTodos() {
        for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
       }
      }
    }


       filter(statusToFilter:any) {
       this.todos = TODOS.filter((todo) => {
        return todo.status === statusToFilter;
      });
  }


  }
