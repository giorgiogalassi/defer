import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import SidebarComponent from './components/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  isClosed = signal<boolean>(true);
  isSidebarLoaded = signal<boolean>(false);

  toggle() {
    if (this.isSidebarLoaded()) this.isClosed.update((status) => !status);
    else this.isSidebarLoaded.set(true);
  }
}
