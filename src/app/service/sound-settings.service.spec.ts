import { TestBed } from '@angular/core/testing';

import { SoundSettingsService } from './sound-settings.service';

describe('SoundSettingsService', () => {
  let service: SoundSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
