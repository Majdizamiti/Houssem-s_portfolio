import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  setActive(sectionId: string) {
    this.activeSection = sectionId;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
