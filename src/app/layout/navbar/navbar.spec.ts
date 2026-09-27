import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NAV_LINKS } from '../../core/site';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Navbar] }).compileComponents();
    fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();
  });

  it('should render a link per navigation entry', () => {
    const anchors = Array.from(
      fixture.nativeElement.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>,
    );

    expect(anchors.length).toBe(NAV_LINKS.length);
    expect(anchors.map((anchor) => anchor.textContent?.trim())).toEqual(
      NAV_LINKS.map((link) => link.label),
    );
  });
});
