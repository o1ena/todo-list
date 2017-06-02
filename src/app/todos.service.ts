import { Injectable } from '@angular/core';
import { Todo } from './todo';


export const TODOS: Todo[] = [
{name: 'Create a todo list', status: 'New'},
{name: 'Add multiple list items', status: 'New'},
{name: 'Change item status to comleted', status: 'Completed'},
{name: 'Delete item', status: 'New'}
];

@Injectable()
  export class TodosService {
    getTodos(): Promise<Todo[]>{
      return Promise.resolve(TODOS);
    }
}




