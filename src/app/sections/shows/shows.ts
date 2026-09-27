import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UPCOMING_SHOWS } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-shows',
  imports: [Section, Reveal],
  templateUrl: './shows.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shows {
  protected readonly shows = UPCOMING_SHOWS;
}
