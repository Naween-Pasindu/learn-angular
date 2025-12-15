import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item-component',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item-component.component.html',
  styleUrl: './todo-item-component.component.scss'
})
export class TodoItemComponentComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoItemClicked() {
    this.todoToggled.emit(this.todo());
  }
}
