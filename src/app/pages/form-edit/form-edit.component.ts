import { Component, Input, signal } from '@angular/core';
import { WidgetFormTitleAndDescriptionComponent } from '../../components/widget-form-title-and-description/widget-form-title-and-description.component';
import { WidgetCreateFieldComponent } from '../../components/widget-create-field/widget-create-field.component';
import { FormDetails } from '../../interfaces/form-details';

@Component({
  selector: 'app-form-edit',
  imports: [WidgetFormTitleAndDescriptionComponent, WidgetCreateFieldComponent],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  fields: any = signal([]);

  addField() {
    this.fields.update((value: any[]): any => {
      return [
        ...value,
        {
          title: new Date().toISOString(),
          description: '',
          type: '',
          options: [],
        },
      ];
    });
  }

  removeField(index: number) {
    this.fields.update((value: any[]): any => {
      console.log(index);
      const tempArray = [...value];
      tempArray.splice(index, 1);
      console.log('Temp array: ', tempArray);
      return tempArray;
    });
  }
}
