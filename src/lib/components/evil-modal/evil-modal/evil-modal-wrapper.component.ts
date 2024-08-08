import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Injector,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'evil-wrapper',
  template: `
    <div class="wrapper">
      <div class="inner-align">
        <ng-container #modalContent></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
      }
      .inner-align {
        margin: auto;
        padding: 10px;
      }
    `,
  ],
})
export class EvilModalWrapper implements AfterViewInit {
  @Input() component: any;

  componentInputs: any;

  @ViewChild('modalContent', { read: ViewContainerRef })
  modalContent!: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const componentRef: ComponentRef<any> = this.modalContent.createComponent(
      this.component,
    );
    Object.keys(this.componentInputs || {}).forEach((inputName) => {
      componentRef.instance[inputName] = this.componentInputs[inputName];
    });
    this.cdr.detectChanges();
  }
}
