import { Component, Input } from '@angular/core';
import { FormListItem } from '../../interfaces/form-list-item';

@Component({
  selector: 'app-form-list-item',
  imports: [],
  templateUrl: './form-list-item.component.html',
  styleUrl: './form-list-item.component.css',
})
export class FormListItemComponent {
  @Input() formItem!: FormListItem;
}
