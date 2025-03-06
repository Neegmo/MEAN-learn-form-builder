import { Component, inject, Input, signal } from '@angular/core';
import { WidgetFormTitleAndDescriptionComponent } from '../../components/widget-form-title-and-description/widget-form-title-and-description.component';
import { WidgetCreateFieldComponent } from '../../components/widget-create-field/widget-create-field.component';
import { FormDetails } from '../../interfaces/form-details';
import { SurveyService } from '../../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  imports: [WidgetFormTitleAndDescriptionComponent, WidgetCreateFieldComponent],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  details: any = signal({});
  fields: any = signal([]);
  surveysService = inject(SurveyService);
  router = inject(Router);

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
    console.log('FIELDS: ', this.fields());
  }

  removeField(index: number) {
    this.fields.update((value: any[]): any => {
      const tempArray = [...value];
      tempArray.splice(index, 1);
      return tempArray;
    });
  }

  updateField(filedIndex: number, fieldValue: any) {
    this.fields.update((value: any[]) => {
      return value.map((item, index) =>
        index === filedIndex ? fieldValue : item
      );
    });
    console.log('FIELDS: ', this.fields());
  }

  updateDetails(values: any) {
    this.details.set(values);
    console.log(this.details());
  }

  saveSurvey() {
    const prev = this.surveysService.surveys.value;
    this.surveysService.surveys.next([
      ...prev,
      {
        title: this.details().title,
        description: this.details().description,
        fields: this.fields(),
      },
    ]);
    this.router.navigate(['/']);
  }
}
