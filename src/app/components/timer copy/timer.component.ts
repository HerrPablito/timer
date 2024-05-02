import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  animations: [
    trigger('moveDot', [
      state('start', style({
        transform: 'translate(0, 0)'
      })),
      state('right', style({
        transform: 'translateX(400px)'
      })),
      state('down', style({
        transform: 'translate(400px , 200px)'
      })),
      state('left', style({
        transform: 'translate(0 , 200px)'
      })),
      state('downAgain', style({
        transform: 'translate(0 , 400px)'
      })),
      state('rightAgain', style({
        transform: 'translate(400px , 400px)'
      })),
      state('end', style({
        transform: 'translate(400px , 400px)'
      })),
      
      transition('* => right', animate('{{transitionTime}}ms ease-in-out')),
      transition('right => down', animate('{{transitionTime}}ms ease-in-out')),
      transition('down => left', animate('{{transitionTime}}ms ease-in-out')), 
      transition('left => downAgain', animate('{{transitionTime}}ms ease-in-out')), 
      transition('downAgain => rightAgain', animate('{{transitionTime}}ms ease-in-out')), 
      transition('rightAgain => end', animate('{{transitionTime}}ms ease-in-out')) 
    ])
  ]
})
export class TimerComponent implements OnInit {
  @Input() duration!: number;
  animationState: string = 'start';
  showEndMessage: boolean = false;
  animationStarted: boolean = false;
  transitionTime: number = 0;
  animationTime: number = 0;

  constructor() { }

  ngOnInit() {
    this.transitionTime = this.duration / 6;
    this.animationTime = this.duration / 6;
    console.log(this.transitionTime);
    
  }

  startAnimation() {
    console.log(this.duration);
    
    this.animateDot();
    this.animationStarted = true; 
  }

  animateDot() {
    setTimeout(() => {
      this.animationState = 'right';
    }, 0);

    setTimeout(() => {
      this.animationState = 'down';
    }, this.animationTime);

    setTimeout(() => {
      this.animationState = 'left';
    }, this.animationTime * 2);

    setTimeout(() => {
      this.animationState = 'downAgain';
    }, this.animationTime * 3);

    setTimeout(() => {
      this.animationState = 'rightAgain';
    }, this.animationTime * 4);
    
    setTimeout(() => {
      this.animationState = 'end';
      this.showEndMessage = true;
    }, this.animationTime * 5);
  }
}