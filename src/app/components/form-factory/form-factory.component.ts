import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { FormDetails } from '../../interfaces/form-details';

@Component({
  selector: 'app-form-factory',
  imports: [ReactiveFormsModule],
  templateUrl: './form-factory.component.html',
  styleUrl: './form-factory.component.css',
})
export class FormFactoryComponent {
  formGroup: any;
  @Input() formDetails!: FormDetails;
  @Output() onSubmitClicked = new EventEmitter<any>();
  formFields = this.formDetails?.fields;
  formService = inject(FormService);
  ngOnInit() {
    this.formGroup = this.formService.generateFormGroup(
      this.formDetails?.fields
    );
  }

  printForm() {
    this.onSubmitClicked.emit(this.formGroup.value);
  }
}
