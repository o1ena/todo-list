  import { Component, OnInit } from '@angular/core';
  import { TodosService} from './todos.service';
  import { Todo } from './todo';
  //import { LocalStorageService } from 'angular-2-local-storage';
 // import { TodoStore } from './todo.store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [TodosService]
})
export class AppComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  addTodoItem(name: string) {
      let todoItem = new Todo(name, 'New', false);
      this.todosService.addTodoItem(todoItem);
  }

  changeStatus(item: Todo, completed: boolean) {
      if (completed) {
          item.status = 'Completed';
      } else {
          item.status = 'New';
      }
      this.todosService.updateTodoItem(item);
  }

  ngOnInit(): void {}
}
