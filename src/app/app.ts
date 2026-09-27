import { Component } from '@angular/core';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { About } from './sections/about/about';
import { Booking } from './sections/booking/booking';
import { Faq } from './sections/faq/faq';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { Music } from './sections/music/music';
import { Shows } from './sections/shows/shows';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Shows, Music, Gallery, Booking, Faq, Footer],
  templateUrl: './app.html',
})
export class App {}
