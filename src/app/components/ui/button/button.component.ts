import { TitleCasePipe } from '@angular/common';
import { Component, input, InputSignal, output, Output } from '@angular/core';
import { IconType, NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-button',
  imports: [NgIcon, TitleCasePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  type: InputSignal<string> = input.required();
  title: InputSignal<string> = input('');
  icon: InputSignal<IconType> = input.required();
  iconSize: InputSignal<string> = input('');
  handelClick = output<boolean>();

  onClickLocal() {
    this.handelClick.emit(true);
  }
}
