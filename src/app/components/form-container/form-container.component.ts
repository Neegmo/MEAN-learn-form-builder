import { Component, Input } from '@angular/core';
import { FormFactoryComponent } from '../form-factory/form-factory.component';
import { InputField } from '../../interfaces/input-field';
import { FormDetails } from '../../interfaces/form-details';
@Component({
  selector: 'app-form-container',
  imports: [FormFactoryComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {
  @Input() formDetails!: FormDetails;
}
