import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('600ms ease-out')
      ])
    ])
  ],
})

export class HomePageComponent implements AfterViewInit {
  @ViewChild('servicesHeader', { static: false }) servicesHeader!: ElementRef;
  @HostBinding('@slideIn') animationState = 'hidden';

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animationState = 'visible';
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.servicesHeader.nativeElement);
  }
}