import { Component, computed, input} from '@angular/core';
import { EvilColor } from '../../evilui-lib.service';

@Component({
  selector: 'evil-progress-bar',
  imports: [],
  templateUrl: './evil-progress-bar.component.html',
  styleUrl: './evil-progress-bar.component.scss',
})
export class EvilProgressBarComponent {
  value = input(0);
  maxValue = input(100);
  color = input('red' as EvilColor);
  showValue = input(true);
  type = input('normal' as 'normal' | 'striped' | 'dark');

  percentage = computed(() => {
    return (this.value() / this.maxValue()) * 100;
  });

  barClasses = computed(() => {
    const classes = [] as string[];
    classes.push(`${this.color()}-bar`);

    return classes;
  });
}
