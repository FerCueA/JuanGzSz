import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAQ_ITEMS } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-faq',
  imports: [Section, Reveal],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  protected readonly items = FAQ_ITEMS;
}
