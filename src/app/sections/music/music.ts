import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TRACKS } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-music',
  imports: [Section, Reveal],
  templateUrl: './music.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Music {
  protected readonly tracks = TRACKS;
}
