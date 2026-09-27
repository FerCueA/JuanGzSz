import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-about',
  imports: [Section, Reveal],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
