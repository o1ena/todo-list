import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()
  export class TodosService {
    todos: Array<Todo> = [];
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

    getTodos(): Array<Todo> {
      return this.todos;
    }

    filter(statusToFilter:any) {
        this.todos = TODOS.filter((todo) => {
          return todo.status === statusToFilter;
        });
    }
}




