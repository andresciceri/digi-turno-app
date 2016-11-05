/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientPanelService } from './client-panel.service';

describe('Service: ClientPanel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientPanelService]
    });
  });

  it('should ...', inject([ClientPanelService], (service: ClientPanelService) => {
    expect(service).toBeTruthy();
  }));
});
