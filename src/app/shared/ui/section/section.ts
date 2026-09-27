import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Standard content section: centered container with the shared max width and
 * horizontal padding. Keeps section spacing consistent across the landing.
 * See DESIGN.md > Layout.
 *
 * @example
 * <app-section id="sobre-mi"> ... </app-section>
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
  /** Anchor id, used by the navigation and the scrollspy. */
  readonly id = input<string>();
}
