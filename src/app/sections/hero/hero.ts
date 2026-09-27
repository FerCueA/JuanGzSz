import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { PosterCard } from '../../shared/ui/poster-card/poster-card';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-hero',
  imports: [Button, PosterCard, Section],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
