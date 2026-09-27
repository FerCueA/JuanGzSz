import { Directive, computed, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'sm';

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition';
const DISABLED_CLASSES = 'pointer-events-none opacity-60';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-ember-strong text-white shadow-ember hover:bg-ember-deep',
  secondary: 'bg-white/75 text-steel shadow-sm hover:bg-white',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-xs uppercase tracking-[0.25em]',
};

/**
 * Shared call-to-action styles. Apply `appButton` to an `<a>` (navigation) or a
 * `<button>` (actions) so the native element keeps its semantics and attributes.
 * See DESIGN.md > Components > Buttons.
 *
 * @example
 * <a appButton href="#contacto">Reservar actuación</a>
 * <button appButton type="submit" [loading]="saving()">Enviar</button>
 */
@Directive({
  selector: '[appButton]',
  host: {
    '[class]': 'classes()',
    '[attr.disabled]': 'disabled() || loading() ? "" : null',
    '[attr.aria-disabled]': 'disabled() || loading() || null',
    '[attr.aria-busy]': 'loading() || null',
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);

  protected readonly classes = computed(() => {
    const state = this.disabled() || this.loading() ? DISABLED_CLASSES : '';
    return [BASE_CLASSES, VARIANT_CLASSES[this.variant()], SIZE_CLASSES[this.size()], state]
      .filter(Boolean)
      .join(' ');
  });
}
