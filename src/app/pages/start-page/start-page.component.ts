import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  constructor(private router: Router) {}

  routeToTimer() {
    this.router.navigate(['/timer']);
  }
  routeToSettings() {
    this.router.navigate(['/settings']);
  }
}
