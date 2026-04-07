import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    class: 'fixed inset-x-0 top-0 z-50 block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {}
