import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GALLERY } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Section } from '../../shared/ui/section/section';

@Component({
  selector: 'app-gallery',
  imports: [Section, Reveal],
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  protected readonly images = GALLERY;
}
