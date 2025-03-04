import { Component, inject, Input, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { InputField } from '../../interfaces/input-field';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-factory',
  imports: [ReactiveFormsModule],
  templateUrl: './form-factory.component.html',
  styleUrl: './form-factory.component.css',
})
export class FormFactoryComponent {
  @Input() formFields!: InputField[];
  formService = inject(FormService);
  formGroup: any;
  ngOnInit() {
    this.formGroup = this.formService.generateFormGroup(this.formFields);
    // console.log(this.formGroup.get('name'));
  }

  printForm() {
    console.log(this.formGroup.value);
  }
}
