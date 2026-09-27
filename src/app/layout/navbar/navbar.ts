import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  afterNextRender,
  signal,
} from '@angular/core';
import { NAV_LINKS } from '../../core/site';

@Component({
  selector: 'app-navbar',
  imports: [NgTemplateOutlet],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnDestroy {
  protected readonly navLinks = NAV_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly activeFragment = signal<string>('');

  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected isActive(fragment: string): boolean {
    return this.activeFragment() === fragment;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /** Highlights the navigation link of the section currently in view. */
  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.navLinks
      .map((link) => document.getElementById(link.fragment.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeFragment.set(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
