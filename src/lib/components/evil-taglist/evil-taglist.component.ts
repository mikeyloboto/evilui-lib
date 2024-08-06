import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EvilToastService } from '../evil-toast/evil-toast.service';

@Component({
  selector: 'evil-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evil-taglist.component.html',
  styleUrl: './evil-taglist.component.scss',
})
export class EvilTaglistComponent {
  constructor(private toastService: EvilToastService) {}

  @Input('tags') tags: string[] = [];
  @Output('tagsChange') tagsChange = new EventEmitter<string[]>();
  @Input('color') color:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'white' = 'red';
  @Input('add-tag') customTagAdder?: () => string | undefined;
  @Input('add-button') addButton?: boolean = true;
  addTag() {
    if (this.customTagAdder) {
      const newTag = this.customTagAdder();
      if (
        newTag &&
        newTag.trim().length > 0 &&
        this.tags.indexOf(newTag.trim())
      ) {
        this.tags.push(newTag.trim());
        this.tagsChange.emit(this.tags);
      }
    } else {
      this.toastService.open({
        header: 'Add Tag',
        color: 'blue',
        inputCallback: (input: string) => {
          if (
            input.trim().length > 0 &&
            this.tags.indexOf(input.trim()) === -1
          ) {
            this.tags.push(input.trim());
            this.tagsChange.emit(this.tags);
            return true;
          }
          return false;
        },
      });
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter((t) => t !== tag);
    this.tagsChange.emit(this.tags);
  }
}
