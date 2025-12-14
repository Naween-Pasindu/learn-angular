import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  todoItems : Array<Todo> = [];
  getTodosFromAPI() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
  }
  constructor() { }
}
