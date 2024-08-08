import { Component, Input } from '@angular/core';

@Component({
  template: ``,
})
export class EvilModalBase {
  @Input() onDismiss?: (result: any) => void;
  dismiss(result?: any): void {
    if (this.onDismiss) {
      this.onDismiss(result);
    }
    if (this.removeModal) {
      this.removeModal();
    }
  }

  @Input() onSuccess?: (result: any) => void;
  success(result?: any): void {
    if (this.onSuccess) {
      this.onSuccess(result);
    }
    if (this.removeModal) {
      this.removeModal();
    }
  }

  @Input() removeModal?: () => void;
}
