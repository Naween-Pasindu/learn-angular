import { Directive, effect, ElementRef, inject, input, InputSignal } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted: InputSignal<boolean> = input(false);
  el = inject(ElementRef<HTMLElement>);
  constructor() { }
  styleEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  });
}
