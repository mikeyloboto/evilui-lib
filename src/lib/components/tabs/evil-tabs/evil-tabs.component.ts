import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'evil-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-tabs.component.html',
  styleUrl: './evil-tabs.component.scss',
})
export class EvilTabsComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    if (this.tabDefs.length > 0) {
      this.switchTab(this.tabDefs[0]);
    }
  }

  private activeTab: EvilTabDef | undefined;

  @ContentChildren('tab') tabs!: QueryList<any>;
  ngOnInit(): void {
    this.tabDefs.forEach((tab) => {
      if (!tab.color) tab.color = 'red';
      if (!tab.position) tab.position = 'start';
    });
  }
  @Input('tabs') tabDefs: EvilTabDef[] = [];
  @Input('darken') darken = true;
  @Input('container-color') container:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';

  switchTab(switchTab: EvilTabDef) {
    this.tabs.forEach((tab, i) => {
      tab.nativeElement.style.display =
        tab.nativeElement.id === switchTab.id ? 'block' : 'none';
    });
    this.activeTab = switchTab;
  }

  getLeft() {
    return this.tabDefs.filter((tab) => tab.position === 'start');
  }

  getRight() {
    return this.tabDefs.filter((tab) => tab.position === 'end');
  }

  getClasses(tab: EvilTabDef) {
    const classes = [];
    classes.push(`base-tab`);
    if (tab === this.activeTab) {
      classes.push(`${tab.color}-tab-active`);
    } else {
      classes.push(`${tab.color}-tab`);
      classes.push(`inactive-tab`);
    }

    classes.push();
    return classes;
  }
}

export class EvilTabDef {
  title!: string;
  id!: string;
  position?: 'start' | 'end' = 'start';
  color?:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
}
