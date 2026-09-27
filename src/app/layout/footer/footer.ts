import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP_URL } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-footer',
  imports: [Button, Reveal],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly whatsappUrl = WHATSAPP_URL;
}
