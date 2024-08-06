import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'evil-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './evil-checkbox.component.html',
  styleUrl: './evil-checkbox.component.scss',
})
export class EvilCheckboxComponent {
  @Input('checked') checked: boolean = false;
  @Output('checkedChange') checkedChange = new EventEmitter<boolean>();
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  protected getClasses(): string[] {
    const classes = [];
    classes.push(`${this.color}`);
    classes.push(this.checked ? 'grayscale-0' : 'grayscale');
    return classes;
  }

  protected getCenterClasses(): string[] {
    const classes = [];
    classes.push(this.checked ? 'left-[1em]' : 'left-[0em]');
    classes.push(`center-dot-${this.color}`);
    if (this.checked) {
      classes.push('shadow-glow');
    }
    return classes;
  }
}
