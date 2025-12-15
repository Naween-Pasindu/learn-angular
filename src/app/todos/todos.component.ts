import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
      console.log(this.todoService.todoItems);
      this.todoService.getTodosFromAPI().pipe(
        catchError (
          (err) => {
            console.log(err);
            throw err;}
        )
      ).subscribe(
        (todos : Array<Todo>) => {
          this.todoItems.set(todos);
          console.log(todos);
        }
      )
  }
}
