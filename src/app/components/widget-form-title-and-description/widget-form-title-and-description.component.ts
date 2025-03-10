import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormListItem } from '../../interfaces/form-list-item';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-form-title-and-description',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './widget-form-title-and-description.component.html',
  styleUrl: './widget-form-title-and-description.component.css',
})
export class WidgetFormTitleAndDescriptionComponent {
  @Input() formItem!: FormListItem;
  @Output() onFormUpdated = new EventEmitter();
  fb = inject(FormBuilder);
  surveyInfo = this.fb.group({
    title: '',
    description: '',
  });

  ngOnInit() {
    this.surveyInfo.patchValue({
      title: this.formItem.title,
      description: this.formItem.description,
    });
  }

  onFormUpdatedLocal() {
    this.onFormUpdated.emit(this.surveyInfo.value);
    console.log('UPDATED');
  }
}
