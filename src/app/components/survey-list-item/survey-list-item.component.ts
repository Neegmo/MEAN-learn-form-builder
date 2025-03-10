import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  Output,
} from '@angular/core';
import { FormListItem } from '../../interfaces/form-list-item';
import { NgIcon } from '@ng-icons/core';
import { ButtonComponent } from '../ui/button/button.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-survey-list-item',
  imports: [ButtonComponent, TitleCasePipe],
  templateUrl: './survey-list-item.component.html',
  styleUrl: './survey-list-item.component.css',
})
export class SurveyListItemComponent {
  // @Input() formItem!: FormListItem;
  formItem: InputSignal<FormListItem> = input.required();
  @Output() onDelete = new EventEmitter<boolean>();
  @Output() onEdit = new EventEmitter<boolean>();
  @Output() onView = new EventEmitter<boolean>();

  onDeleteLocal() {
    this.onDelete.emit();
  }
  onEditLocal() {
    this.onEdit.emit();
  }
  onViewLocal() {
    this.onView.emit();
  }
}
