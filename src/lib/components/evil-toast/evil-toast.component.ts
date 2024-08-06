import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvilButtonComponent } from '../evil-button/evil-button.component';
import { EvilToastInfo, EvilToastService } from './evil-toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, FormsModule, EvilButtonComponent],
  templateUrl: './evil-toast.component.html',
  styleUrl: './evil-toast.component.scss',
})
export class EvilToastComponent {
  constructor(protected toastService: EvilToastService) {}

  conditionalRemove(condition: boolean, toast: EvilToastInfo) {
    if (condition) {
      this.toastService.remove(toast);
    }
  }

  procCancelClick(toast: EvilToastInfo) {
    if (toast.cancelCallback) toast.cancelCallback();
    else this.toastService.remove(toast);
  }
}
