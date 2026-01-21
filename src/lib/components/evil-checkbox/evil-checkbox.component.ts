import { Component, computed, input, output } from '@angular/core';
import { EvilColor } from '../../evilui-lib.service';

@Component({
  selector: 'evil-checkbox',
  imports: [],
  templateUrl: './evil-checkbox.component.html',
  styleUrl: './evil-checkbox.component.scss',
})
export class EvilCheckboxComponent {
  checked = input(false);
  checkedChange = output<boolean>();
  color = input('red' as EvilColor);

  classes = computed(() => {
    const classes = [] as string[];
    classes.push(`${this.color()}`);
    classes.push(this.checked() ? 'grayscale-0' : 'grayscale');
    return classes;
  });

  centerClasses = computed(() => {
    const classes = [] as string[];
    classes.push(this.checked() ? 'left-[1em]' : 'left-[0em]');
    classes.push(`center-dot-${this.color()}`);
    if (this.checked()) {
      classes.push('shadow-glow');
    }
    return classes;
  });
}
