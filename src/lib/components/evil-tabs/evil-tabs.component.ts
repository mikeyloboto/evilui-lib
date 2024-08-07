import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { EvilTabComponent } from './evil-tab/evil-tab.component';

@Component({
  selector: 'evil-tab-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-tabs.component.html',
  styleUrl: './evil-tabs.component.scss',
})
export class EvilTabsComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    this.tabs.forEach((tab) => {
      this.tabDefs.push({
        color: tab.color,
        id: tab.id,
        title: tab.title,
        position: tab.position,
      });
    });
    if (this.tabDefs.length > 0) {
      this.switchTab(this.tabDefs[0]);
    }
  }

  private activeTab: EvilTabDef | undefined;

  @ContentChildren(EvilTabComponent) tabs!: QueryList<EvilTabComponent>;
  tabDefs: EvilTabDef[] = [];
  @Input('darken') darken = false;
  @Input('container-color') container:
    | 'none'
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'none';

  switchTab(switchTab: EvilTabDef) {
    this.tabs.forEach((tab, i) => {
      tab.active = tab.id === switchTab.id;
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

  getContainerClasses() {
    const classes = [];
    if (this.container != 'none') {
      classes.push(`container-${this.container}`);
      classes.push('border-y-2');
    }
    if (this.darken) {
      classes.push('darken-container');
    }
    return classes;
  }
}

export interface EvilTabDef {
  title: string;
  id: string;
  position: 'start' | 'end';
  color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white';
}
