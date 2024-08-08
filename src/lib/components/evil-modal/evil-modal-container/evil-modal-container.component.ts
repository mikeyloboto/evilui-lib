import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { EvilModalService } from '../evil-modal.service';

@Component({
  selector: 'evil-modal-container',
  standalone: true,
  imports: [],
  templateUrl: './evil-modal-container.component.html',
  styleUrl: './evil-modal-container.component.scss',
})
export class EvilModalContainerComponent implements AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  constructor(protected modalService: EvilModalService) {}

  ngAfterViewInit() {
    this.modalService.setContainerRef(this.viewContainerRef);
  }
}
