import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'evil-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-tab.component.html',
  styleUrl: './evil-tab.component.css',
})
export class EvilTabComponent {
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  @Input('position') position: 'start' | 'end' = 'start';
  @Input('title') title: string = 'tab';
  @Input('active') active: boolean = false;
  @Input('id') id: string = `tab-${Math.random().toString(36)}`;
}
