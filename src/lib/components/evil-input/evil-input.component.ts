import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvilColor } from '../../evilui-lib.service';

@Component({
  selector: 'evil-input',
  imports: [FormsModule],
  templateUrl: './evil-input.component.html',
  styleUrl: './evil-input.component.scss',
})
export class EvilInputComponent {
  data = input('' as string | number);
  dataChange = output<string | number>();
  wFull = input(false);
  enterClick = output<void>();
  placeholder = input('');
  change = output<void>();
  color = input('red' as EvilColor);
  type = input('text' as 'text' | 'number' | 'password');

  classes = computed(() => {
    const classes = [] as string[];
    classes.push(`${this.color()}`);
    classes.push(this.wFull() ? 'w-full' : 'max-w-fit');
    return classes;
  });
}
