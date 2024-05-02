import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerComponent } from '../../../components/timer/timer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-two-minutes',
  standalone: true,
  imports: [TimerComponent, CommonModule],  
  templateUrl: './two-minutes.component.html',
  styleUrls: ['./two-minutes.component.scss'],
})
export class TwoMinutesComponent implements OnInit {

  constructor(private router: Router) {}

  duration: number = 30000;

  ngOnInit() {
  
  }

  routeToTimer() {
    this.router.navigate(['/timer']);
  }
}