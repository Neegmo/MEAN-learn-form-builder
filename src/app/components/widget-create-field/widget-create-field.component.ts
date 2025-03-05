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

  ngOnInit() {
    this.field.set(this.fieldData);
    this.formGroup.patchValue({
      title: this.fieldData.title,
      description: this.fieldData.description,
      type: this.fieldData.type,
    });
    console.log(this.formGroup.value);
  }

  onAddOption() {
    this.options.push(this.formBuilder.control(''));
  }
  onRemoveOption(index: number) {
    console.log('index: ', index);
    this.options.removeAt(index);
  }
  onDeleteClicked() {
    this.onDelete.emit();
  }

  displayFormValues() {
    console.log(this.formGroup.value);
  }
}
