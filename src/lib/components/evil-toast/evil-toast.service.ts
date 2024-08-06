import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EvilToastService {
  toasts: EvilToastInfo[] = [];

  constructor() {}

  open(newToast: EvilToastInfo) {
    this.toasts.push(newToast);
    if (!newToast.inputCallback && !newToast.successCallback) {
      setTimeout(() => {
        this.remove(newToast);
      }, newToast.delay || 10000);
    }
  }

  remove(toast: EvilToastInfo) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}

export interface EvilToastInfo {
  message?: string;
  header?: string;
  delay?: number;
  color?:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white';
  icon?: string;
  inputCallback?: (value: string) => boolean;
  inputText?: string;
  successCallback?: () => void;
  cancelCallback?: () => void;
}
