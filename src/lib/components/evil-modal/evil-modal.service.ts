import {
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { EvilModalWrapper } from './evil-modal/evil-modal-wrapper.component';

@Injectable({
  providedIn: 'root',
})
export class EvilModalService {
  modalRefs: ComponentRef<any>[] = [];

  viewContainerRef!: ViewContainerRef;

  constructor(private injector: Injector) {}

  setContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  openModal(component: any, options?: EvilModalOptions): void {
    const modalRef: ComponentRef<EvilModalWrapper> =
      this.viewContainerRef.createComponent(EvilModalWrapper, {
        injector: this.injector,
      });
    modalRef.instance.component = component;
    const componentOptions: any = options?.data || {};
    if (options) {
      componentOptions.onSuccess = options.onSuccess;
      componentOptions.onDismiss = options.onDismiss;
    }
    componentOptions.removeModal = () => {
      const index = this.modalRefs.indexOf(modalRef);
      if (index > -1) this.modalRefs.splice(index, 1);
      modalRef.destroy();
    };
    modalRef.instance.componentInputs = componentOptions;
    modalRef.instance.escDismiss = () => {
      if (this.modalRefs.length > 0) {
        this.modalRefs[this.modalRefs.length - 1].instance.dismiss();
        this.modalRefs.pop()?.destroy();
      }
    };
    modalRef.instance.outsideDismiss = options?.outsideDismiss || false;
    this.modalRefs.push(modalRef);
  }
}

export interface EvilModalOptions {
  onSuccess?: (result: any) => void;
  onDismiss?: (result: any) => void;
  outsideDismiss?: boolean;
  data?: any;
}

export interface EvilModalDef {
  content: any;
}
