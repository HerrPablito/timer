import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundSettingsService {
  private _isSoundOn = true;

  get isSoundOn(): boolean {
    return this._isSoundOn;
  }

  toggleSound(): void {
    this._isSoundOn = !this._isSoundOn;
  }
}