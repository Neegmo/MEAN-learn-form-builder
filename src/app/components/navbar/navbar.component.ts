import { Component, signal, WritableSignal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  closed: WritableSignal<boolean> = signal(true);

  toggleMenu() {
    this.closed.update((value) => !value);
  }
}
