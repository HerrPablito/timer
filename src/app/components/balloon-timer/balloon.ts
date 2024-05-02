import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SoundSettingsService } from '../../service/sound-settings.service';



@Component({
  selector: 'balloon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balloon.html',
  styleUrls: ['./balloon.scss'],
  animations: [
    trigger('moveDot', [
      state('start', style({
        transform: 'scale(1)',
      })),
      state('grow1', style({
        transform: 'scale(2) translateX(30px) translateY(0px)'
      })),
      state('grow2', style({
        transform: 'scale(3) translateX(40px) translateY(20px)'
      })),
      state('grow3', style({
        transform: 'scale(4) translateX(30px) translateY(30px)'
      })),
      state('grow4', style({
        transform: 'scale(5) translateX(-20px) translateY(20px)'
      })),
      state('grow5', style({
        transform: 'scale(6) translateX(-20px) translateY(-30px)'
      })),
      state('grow6', style({
        transform: 'scale(7) translateX(90px) translateY(170px)'
      })),
      state('shrink', style({
        transform: 'scale(0)'
      })),
      state('end', style({
        transform: 'scale(0)'
      })
      ),
      
      transition('start => grow1',
      animate('10000ms')),
      transition('grow1 => grow2',
      animate('10000ms')),
      transition('grow2 => grow3',
      animate('10000ms')),
      transition('grow3 => grow4',
      animate('10000ms')),
      transition('grow4 => grow5',
      animate('10000ms')),
      transition('grow5 => grow6',
      animate('95000ms')),
      transition('grow6 => shrink',
      animate('500ms')),
      transition('shrink => end',
      animate('0ms'))

    ]),
    trigger('moveNeedle', [
      state('start', style({
        transform: 'translateX(0) translateY(0) scale(1)'
      })),
      state('pop', style({
        transform: 'translateX(-350px) translateY(150px)'
      })),
      transition('start => pop', animate('10000ms'))
    ])
  ]
})
export class BalloonComponent implements OnInit, OnDestroy {

  animationState: string = 'start';
  needleAnimationState = 'start';
  showEndMessage: boolean = false;
  animationStarted: boolean = false;


  ngOnInit() {  
  }

  ngOnDestroy() {
   this.stopAllMusic(); 
  }



  private backgroundAudio: HTMLAudioElement | undefined;
  private endAudio: HTMLAudioElement | undefined;

  constructor(private soundSettings: SoundSettingsService) {
    // Kontrollera om Audio är definierad innan du använder det
    if (typeof Audio !== 'undefined') {
      this.backgroundAudio = new Audio("../../../assets/taratata-6264.mp3");
      this.endAudio = new Audio("../../../assets/happy-logo-167474.mp3");
    } else {
      console.warn('Audio-funktionalitet stöds inte i den aktuella miljön.');
    }
  }

  startSound() {
    this.backgroundAudio!.load();
    this.backgroundAudio!.play();
    this.backgroundAudio!.loop = true;

    setTimeout(() => {
      this.backgroundAudio!.pause();
      this.backgroundAudio!.currentTime = 0;
    }, 60000);
  }

  stopSound() {
    this.endAudio!.load();
    this.endAudio!.pause();
    this.endAudio!.loop = false;
    setTimeout(() => {
      this.endAudio!.play();
    }, 60000);
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
    this.animateNeedle();
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
      this.animationState = 'grow1';
    }, 1000);
    setTimeout(() => {
      this.animationState = 'grow2';
    }, 10000);
    setTimeout(() => {
      this.animationState = 'grow3';
    }, 20000);
    setTimeout(() => {
      this.animationState = 'grow4';
    }, 30000);
    setTimeout(() => {
      this.animationState = 'grow5';
    }, 40000);
    setTimeout(() => {
      this.animationState = 'grow6';
    }, 50000);
    setTimeout(() => {
      this.animationState = 'shrink';
    } , 59500);
    setTimeout(() => {
      this.animationState = 'end';
      this.showEndMessage = true;
    }, 60000);
  }  
  animateNeedle() {
    setTimeout(() => {
      this.needleAnimationState = 'pop';
    }, 50000); // Justera timing beroende på när du vill att denna animation ska köras
  }
}