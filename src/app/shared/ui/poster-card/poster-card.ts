import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

/**
 * Decorative jazz poster used as the hero's visual anchor. Falls back to a pure
 * CSS illustration when the photograph cannot be loaded.
 */
@Component({
  selector: 'app-poster-card',
  imports: [NgOptimizedImage],
  templateUrl: './poster-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosterCard {
  protected readonly photoAvailable = signal(true);

  protected usePosterFallback(): void {
    this.photoAvailable.set(false);
  }
}
