import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Portfolio } from './components/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
