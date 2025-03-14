import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormContainerComponent } from './components/form-container/form-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form-factory';
}
