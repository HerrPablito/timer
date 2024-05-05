import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SoundSettingsService } from '../../service/sound-settings.service';

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
        transform: 'translate(400px , 240px)'
      })),
      state('left', style({
        transform: 'translate(20px , 240px)'
      })),
      state('downAgain', style({
        transform: 'translate(20px , 500px)'
      })),
      state('rightAgain', style({
        transform: 'translate(400px , 500px)'
      })),
      state('end', style({
        transform: 'translate(400px , 500px)'
      })),
      
      transition('* => right', animate('24000ms')),
      transition('right => down', animate('24000ms')),
      transition('down => left', animate('24000ms')), 
      transition('left => downAgain', animate('24000ms')), 
      transition('downAgain => rightAgain', animate('24000ms')), 
      transition('rightAgain => end', animate('0ms')) 
    ])
  ]
})


export class TimerComponent implements OnInit {
  
  
  animationState: string = 'start';
  showEndMessage: boolean = false;
  animationStarted: boolean = false;
  private backgroundAudio: HTMLAudioElement | undefined;
  private endAudio: HTMLAudioElement | undefined;

  constructor(private soundSettings: SoundSettingsService) {
    if(typeof Audio !== 'undefined'){
    this.backgroundAudio = new Audio("../../../assets/country-long-w-acrdn-17618.mp3");
    this.endAudio = new Audio("../../../assets/happy-logo-167474.mp3");      
    }else{
      console.log("Audio is not supported");
    }

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.stopAllMusic(); 
   }
   
  startSound() {
    this.backgroundAudio!.load();
    this.backgroundAudio!.play();
    this.backgroundAudio!.loop = true;

    setTimeout(() => {
      this.backgroundAudio!.pause();
      this.backgroundAudio!.currentTime = 0;
    }, 120000);
  }

  stopSound() {
    this.endAudio!.load();
    this.endAudio!.pause();
    this.endAudio!.loop = false;
    setTimeout(() => {
      this.endAudio!.play();
    }, 120000);
  }

  stopAllMusic() {
    if (this.backgroundAudio) {
      this.backgroundAudio.pause();
      this.backgroundAudio.currentTime = 0;
    }
    if (this.endAudio) {
      this.endAudio.pause();
      this.endAudio.currentTime = 0;
    }
  }

  startAnimation() {   
    this.animateDot();
    this.animationStarted = true; 
    if (this.soundSettings.isSoundOn) {
      this.startSound();
      this.stopSound();
    }
  }

  animateDot() {
    setTimeout(() => {
      this.animationState = 'start';
    }, 0);

    setTimeout(() => {
      this.animationState = 'right';
    }, 500);

    setTimeout(() => {
      this.animationState = 'down';
    }, 23500);

    setTimeout(() => {
      this.animationState = 'left';
    }, 48000);

    setTimeout(() => {
      this.animationState = 'downAgain';
    }, 72000);

    setTimeout(() => {
      this.animationState = 'rightAgain';
    }, 96000);
    
    setTimeout(() => {
      this.animationState = 'end';
      this.showEndMessage = true;
    }, 120000);
  }
  
}