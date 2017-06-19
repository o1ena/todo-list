import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()
export class TodosService {
    statusesSet: Set<string> = new Set<string>();
    todos: Array<Todo> = [];

    private updateStatusesSet() {
        this.statusesSet.clear();
        this.todos.forEach((item) => {
            this.statusesSet.add(item.status);
        })
    }

    convertTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodoItem(newTodo: Todo) {
        this.todos.push(newTodo);
        this.convertTodos();
        this.updateStatusesSet();
    }

    deleteTodo(index: any) {
      this.todos.splice(index, 1);
      this.convertTodos();
      this.updateStatusesSet();
    }

    updateTodoItem(todoItem: Todo) {
        let index = this.todos.findIndex((item) => {
            return item.name === todoItem.name;
        });
        this.todos[index] = todoItem;
        this.convertTodos();
        this.updateStatusesSet();
    }

    getTodos(): Array<Todo> {
        if (this.todos.length === 0) {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        }
        this.updateStatusesSet();
        return this.todos.slice();
    }

    filter(statusToFilter: any) {
        this.todos = this.todos.filter((todo) => {
            return todo.status === statusToFilter;
        });
    }
}
