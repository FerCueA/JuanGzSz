import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly photoAvailable = signal(true);

  protected usePosterFallback(): void {
    this.photoAvailable.set(false);
  }
}
