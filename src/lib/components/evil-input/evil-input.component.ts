import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evil-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evil-input.component.html',
  styleUrl: './evil-input.component.scss',
})
export class EvilInputComponent {
  @Input('data') data: string | number = '';
  @Output('dataChange') dataChange = new EventEmitter<string | number>();
  @Input('w-full') wFull = false;
  @Output('enter-click') enterClick = new EventEmitter<void>();
  @Input('placeholder') placeholder = '';
  @Output('change') change = new EventEmitter<void>();
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  @Input('type') type: 'text' | 'number' = 'text';

  protected getClasses(): string[] {
    const classes = [];
    classes.push(`${this.color}`);
    classes.push(this.wFull ? 'w-full' : 'max-w-fit');
    return classes;
  }
}
