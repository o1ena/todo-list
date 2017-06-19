import { Component, OnInit } from '@angular/core';
import { TodosService} from './todos.service';
import { Todo } from './todo';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./todos.css'],
  providers: [TodosService]
})
export class AppComponent implements OnInit {
  selectedStatus: string;
  constructor(private todosService: TodosService) {}

  addTodoItem(name: string) {
     let todoItem = new Todo(name, 'New', false);
     if(todoItem.name != ''){
     this.todosService.addTodoItem(todoItem);
     }
   }

  changeStatus(item: Todo, completed: boolean) {
      if (completed) {
          item.status = 'Completed';
      } else {
          item.status = 'New';
      }
      this.todosService.updateTodoItem(item);
  }

  selectStatus(status: string): void {
      this.selectedStatus = status;
  }

  clearStatusSelection() {
      this.selectedStatus = '';
  }

   ngOnInit(): void {}
}
