import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kids_timer';

  ngOnInit() {
    this.keepDeviceAwake();
  }

  keepDeviceAwake() {
    if (document.visibilityState === 'visible') {
      window.requestAnimationFrame(() => this.keepDeviceAwake());
    }
  }
}