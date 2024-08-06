import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'evil-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-progress-bar.component.html',
  styleUrl: './evil-progress-bar.component.scss',
})
export class EvilProgressBarComponent {
  @Input('value') value: number = 0;
  @Input('max-value') maxValue: number = 100;
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  @Input('show-value') showValue: boolean = true;
  @Input('type') type: 'normal' | 'striped' | 'dark' = 'normal';

  getPercentage(): number {
    return (this.value / this.maxValue) * 100;
  }

  getBarClasses(): string[] {
    const classes = [];
    classes.push(`${this.color}-bar`);

    return classes;
  }
}
