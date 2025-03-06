import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { FieldTypeArray, FieldType } from '../../enums/field-type.enum';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-create-field',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './widget-create-field.component.html',
  styleUrl: './widget-create-field.component.css',
})
export class WidgetCreateFieldComponent {
  @Input() fieldData!: any;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onFormChange = new EventEmitter();
  formBuilder = inject(FormBuilder);
  field: WritableSignal<any> = signal({});
  readonly fieldTypesArray = FieldTypeArray;
  readonly fieldTypes = FieldType;

  formGroup = this.formBuilder.group({
    title: '',
    description: '',
    type: '',
    options: this.formBuilder.array([]),
  });
  get options() {
    return this.formGroup.get('options') as FormArray;
  }

  onFormChangeLocal() {
    this.onFormChange.emit(this.formGroup.value);
  }

  ngOnInit() {
    this.field.set(this.fieldData);
    this.formGroup.patchValue({
      title: this.fieldData.title,
      description: this.fieldData.description,
      type: this.fieldData.type,
    });
  }

  onAddOption() {
    this.options.push(this.formBuilder.control(''));
  }
  onRemoveOption(index: number) {
    this.options.removeAt(index);
  }
  onDeleteClicked() {
    this.onDelete.emit();
  }
}
