import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { EvilButtonComponent } from '../evil-button/evil-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metadata-editor',
  standalone: true,
  imports: [EvilButtonComponent, CommonModule, FormsModule],
  templateUrl: './metadata-editor.component.html',
  styleUrl: './metadata-editor.component.scss',
})
export class MetadataEditorComponent implements OnChanges {
  @Input('data') metadata?: { [key: string]: any };
  @Output('dataChange') metadataChange = new EventEmitter<{
    [key: string]: any;
  }>();

  @Output('change') change = new EventEmitter<void>();

  procData: { key: string; value: any }[] = [];

  ngOnChanges() {
    this.procData = Object.entries(this.metadata || {}).map(([key, value]) => ({
      key: key,
      value: value,
    }));
  }

  addField(): void {
    this.procData.push({ key: `field ${this.procData.length}`, value: '' });
    this.rebuild();
  }

  removeField(field: { [key: string]: any }): void {
    this.procData = this.procData.filter((f) => f !== field);
    this.rebuild();
  }

  convertToComplex(field: { [key: string]: any }) {
    field.value = {};
  }

  rebuild() {
    const newObj: { [key: string]: any } = {};
    this.procData.forEach((field) => {
      newObj[field.key] = field.value;
    });
    this.metadata = newObj;
    this.metadataChange.emit(newObj);
    this.change.emit();
  }

  checkComplex(field: { [key: string]: any }) {
    return typeof field.value === 'object';
  }
}
