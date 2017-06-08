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

    addTodoItem(newTodo: Todo) {
        this.todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.updateStatusesSet();
    }

    deleteTodoItem(todo: Todo): void {
        var index = this.todos.indexOf(todo, 0);
        if (index !== undefined) {
            this.todos.splice(index, 1);
        }
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.updateStatusesSet();
    }

    deleteSelectedTodos() {
        for (var i = (this.todos.length - 1); i > -1; i--) {
            if (this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.updateStatusesSet();
    }

    updateTodoItem(todoItem: Todo) {
        let index = this.todos.findIndex((item) => {
            return item.name === todoItem.name;
        });
        this.todos[index] = todoItem;
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.updateStatusesSet();
    }

    getTodos(): Array<Todo> {
        if (this.todos.length === 0) {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        }
        this.updateStatusesSet();
        return this.todos;
    }

    filter(statusToFilter: any) {
        this.todos = this.todos.filter((todo) => {
            return todo.status === statusToFilter;
        });
    }
}
