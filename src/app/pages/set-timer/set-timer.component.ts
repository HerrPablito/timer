import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-timer',
  standalone: true,
  imports: [],
  templateUrl: './set-timer.component.html',
  styleUrl: './set-timer.component.scss'
})
export class SetTimerComponent {


  constructor(private router: Router) {}

  routeToStart() {
    this.router.navigate(['/start']);
  }
  routeToTwoMinutesPage() {
    this.router.navigate(['/timer/two-minutes']);
  }

  routeToBalloonTimerPage() {
    this.router.navigate(['/timer/balloon-timer']);
  }
  routeToCustomTimerPage() {
    this.router.navigate(['/custom-timer']);
  }
  routeToUnderConstructionPage() {
    this.router.navigate(['/under-construction']);
  }
}
