import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';


@Injectable()
  export class TodosService {
    getTodos(): Promise<Todo[]>{
      return Promise.resolve(TODOS);
    }
  }
