import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'evil-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-button.component.html',
  styleUrl: './evil-button.component.scss',
})
export class EvilButtonComponent {
  constructor(private router: Router) {}
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  @Input('w-full') wFull: boolean = false;
  @Input('link') link: string | undefined = undefined;
  @Output('click') clickHandler: EventEmitter<void> = new EventEmitter<void>();
  handleClick() {
    if (this.link) this.router.navigate([this.link]);
    this.clickHandler.emit();
  }

  protected getClass(): string[] {
    const classes = [];
    classes.push(`${this.color}`);
    classes.push(this.wFull ? 'w-full' : 'w-fit');
    return classes;
  }
}
