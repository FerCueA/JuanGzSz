import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { whatsappUrl } from '../../core/site';
import { Reveal } from '../../shared/directives/reveal';
import { Button } from '../../shared/ui/button/button';
import { Section } from '../../shared/ui/section/section';

type BookingFormValue = Partial<{
  name: string;
  eventType: string;
  date: string;
  message: string;
}>;

const EVENT_TYPES = ['Sala', 'Evento privado', 'Colaboración', 'Otro'] as const;

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, Button, Section, Reveal],
  templateUrl: './booking.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Booking {
  private readonly builder = inject(FormBuilder);

  protected readonly eventTypes = EVENT_TYPES;
  protected readonly attempted = signal(false);

  protected readonly form = this.builder.nonNullable.group({
    name: ['', Validators.required],
    eventType: ['', Validators.required],
    date: [''],
    message: [''],
  });

  private readonly value = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });

  /** Live WhatsApp deep link built from the current form values. */
  protected readonly whatsappLink = computed(() => whatsappUrl(this.buildMessage(this.value())));

  protected showError(controlName: 'name' | 'eventType'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.attempted());
  }

  /** Blocks navigation and surfaces errors while the form is incomplete. */
  protected submit(event: Event): void {
    this.attempted.set(true);

    if (this.form.invalid) {
      event.preventDefault();
      this.form.markAllAsTouched();
    }
  }

  private buildMessage(value: BookingFormValue): string {
    return [
      `Hola Juan, soy ${value.name || '…'}.`,
      `Me gustaría hablar contigo sobre una actuación (${value.eventType || 'por definir'}).`,
      value.date ? `Fecha aproximada: ${value.date}.` : '',
      value.message ? `Detalles: ${value.message}` : '',
    ]
      .filter((line) => line.length > 0)
      .join(' ');
  }
}
