import { Component, ElementRef, ViewChild, AfterViewInit, NgZone, signal, Inject, PLATFORM_ID, WritableSignal, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  // Modern Angular Signals for reactive state
  statValueE = signal(0);
  statValueP = signal(0);
  statValueC = signal(0);

  private animated = false;
  private scrollListener: any;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // To strictly ensure it doesn't trigger on reload while at the top,
      // we wait for the first user scroll event before even setting up the observer.
      this.scrollListener = () => {
        this.initScrollObserver();
        window.removeEventListener('scroll', this.scrollListener);
      };

      window.addEventListener('scroll', this.scrollListener);

      // Also check if we're already scrolled down on load (browser restores position)
      if (window.scrollY > 100) {
        this.initScrollObserver();
      }
    }
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initScrollObserver() {
    if (this.animated) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.ngZone.run(() => {
            this.animated = true;
            this.startAnimations();
            observer.unobserve(entry.target);
          });
        }
      });
    }, observerOptions);

    if (this.statsSection) {
      observer.observe(this.statsSection.nativeElement);
    }
  }

  private startAnimations() {
    this.animate(this.statValueE, 2, 1200);
    this.animate(this.statValueP, 20, 2000);
    this.animate(this.statValueC, 10, 2000);
  }

  private animate(sig: WritableSignal<number>, target: number, duration: number) {
    const startValue = 0;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const value = Math.floor(easeOutCubic(progress) * (target - startValue) + startValue);

      this.ngZone.run(() => {
        sig.set(value);
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.ngZone.run(() => sig.set(target));
      }
    };

    requestAnimationFrame(update);
  }
}

