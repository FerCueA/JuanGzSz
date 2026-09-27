import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Booking } from './booking';

describe('Booking', () => {
  let fixture: ComponentFixture<Booking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Booking] }).compileComponents();
    fixture = TestBed.createComponent(Booking);
    await fixture.whenStable();
  });

  function submitLink(): HTMLAnchorElement {
    return fixture.nativeElement.querySelector('a[href^="https://wa.me/"]') as HTMLAnchorElement;
  }

  it('should build a WhatsApp link from the form values', () => {
    expect(submitLink()).toBeTruthy();
    expect(submitLink().getAttribute('href')).toContain('wa.me/');
  });

  it('should show validation errors when required fields are empty', async () => {
    submitLink().dispatchEvent(new Event('click'));
    await fixture.whenStable();
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Escribe tu nombre.');
    expect(text).toContain('Elige el tipo de evento.');
  });
});
