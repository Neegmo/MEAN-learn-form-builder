import { Component, inject, OnInit } from '@angular/core';
import { FormFactoryComponent } from '../../components/form-factory/form-factory.component';
import { SurveyService } from '../../services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyData } from '../../interfaces/survey-data';
import { FormDetails } from '../../interfaces/form-details';
import { InputField } from '../../interfaces/input-field';
import { FieldType } from '../../enums/field-type.enum';

@Component({
  selector: 'app-survey-preview',
  imports: [FormFactoryComponent],
  templateUrl: './survey-preview.component.html',
  styleUrl: './survey-preview.component.css',
})
export class SurveyPreviewComponent implements OnInit {
  router = inject(Router);
  surveyService = inject(SurveyService);
  formData!: FormDetails;
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const currentIndex: number = +this.route.snapshot.params['id'];
    const currentSurvey: SurveyData =
      this.surveyService.surveys.value[currentIndex];
    this.formData = {
      title: currentSurvey.info.title,
      description: currentSurvey.info.description,
      fields:
        currentSurvey.fields?.map((field, index) => {
          return {
            type: field.type || FieldType.TEXT,
            label: field.title,
            placeholder: field.title,
            formControlName: index.toString(),
            value: '',
            options: field.options,
          };
        }) || [],
      button: {
        title: 'submit',
        icon: 'ionSave',
      },
    };
  }

  onSubmitClicked(form: any) {
    console.log('FORM SUBMISSION: ', form);
    this.router.navigate(['/']);
  }
}
