import { Injectable } from '@angular/core';
import { Todo } from './todo';


export const TODOS: Todo[] = [
{name: 'Create a todo list', status: 'New', completed: false},
{name: 'Add multiple list items', status: 'New', completed: false},
{name: 'Change item status to comleted', status: 'Completed', completed: true},
{name: 'Delete item', status: 'New',completed: false}
];

@Injectable()
  export class TodosService {
    getTodos(): Promise<Todo[]>{
      return Promise.resolve(TODOS);
    }
}




