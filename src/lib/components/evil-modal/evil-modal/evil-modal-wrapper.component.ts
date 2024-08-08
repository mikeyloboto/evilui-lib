import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'evil-wrapper',
  template: `
    <div class="wrapper">
      <ng-container #modalContent></ng-container>
    </div>
  `,
  styles: [
    `
      .wrapper {
        margin: 10px;
        border: 1px solid #ccc;
        padding: 10px;
      }
    `,
  ],
})
export class EvilModalWrapper implements AfterViewInit {
  @Input() component: any;

  componentInputs: any;

  componentInjector!: Injector;

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
