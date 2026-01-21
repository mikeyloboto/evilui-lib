import { Component, computed, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { EvilColor } from '../../evilui-lib.service';

@Component({
  selector: 'evil-button',
  imports: [],
  templateUrl: './evil-button.component.html',
  styleUrl: './evil-button.component.scss',
})
export class EvilButtonComponent {
  constructor(private router: Router) { }

  color = input('red' as EvilColor);
  wFull = input(false);
  link = input(undefined as string | undefined);
  type = input('neon' as 'neon' | 'metal');
  click = output<void>();

  classes = computed(() => {
    const classes: string[] = [];
    classes.push(this.wFull() ? 'w-full' : 'w-fit');
    if (this.type() === 'neon')
      classes.push(`${this.color()}`, 'from-neutral-800');
    if (this.type() === 'metal')
      classes.push(`${this.color()}-metal`, 'to-75%');
    return classes;
  });

  handleClick() {
    if (this.link) this.router.navigate([this.link]);
    this.click.emit();
  }
}
