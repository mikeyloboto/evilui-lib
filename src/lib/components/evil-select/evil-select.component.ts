import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evil-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evil-select.component.html',
  styleUrl: './evil-select.component.scss',
})
export class EvilSelectComponent {
  @Input('data') data?: any[];
  @Input('value') value: any;
  @Output('valueChange') valueChange = new EventEmitter<any>();
  @Input('value-field') valueField?: string;
  @Input('on-change') onChange?: (value: any) => void;
  @Input('w-full') wFull = false;
  @Input('placeholder') placeholder = 'Select option...';
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  procChange(value: any) {
    if (this.onChange) {
      this.onChange(value);
    }
    this.valueChange.emit(value);
  }

  getClasses(): string[] {
    const classes = [];
    classes.push(`${this.color}`);
    classes.push(this.wFull ? 'w-full' : 'max-w-fit');
    return classes;
  }
}
