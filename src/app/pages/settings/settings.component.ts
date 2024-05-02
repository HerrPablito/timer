import { Component } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';
import { SoundSettingsService } from '../../service/sound-settings.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(public soundSettings: SoundSettingsService) {}

  toggleAudio() {
    this.soundSettings.toggleSound();
  }
}
