import { BalloonComponent} from '../../../components/balloon-timer/balloon';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balloon-timer',
  standalone: true,
  imports: [BalloonComponent, CommonModule],
  templateUrl: './balloon-timer.component.html',
  styleUrl: './balloon-timer.component.scss'
})
export class BalloonTimerComponent {

}
