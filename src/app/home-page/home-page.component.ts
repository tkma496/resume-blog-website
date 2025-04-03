import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  @ViewChild('servicesCardTitle', { static: false }) servicesCardTitle!: ElementRef;
  //this line causes the whole page to slide in from the left
  //@HostBinding('@slideIn') animationState = 'hidden';
  animationState = 'hidden';
  /* The ngAfterviewInit code below is only for use with Angular Animations
  which we may want to remove after moving to GSAP+ScrollTrigger
  ngAfterViewInit(): void {
    if (this.servicesHeaderContainer?.nativeElement instanceof Element) {
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
  
      observer.observe(this.servicesHeaderContainer.nativeElement);
    } else {
      console.warn('servicesHeaderContainer.nativeElement is not a valid Element:', this.servicesHeaderContainer?.nativeElement);
    }
  }*/
    ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.from(this.servicesCardTitle.nativeElement, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: this.servicesCardTitle.nativeElement,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true, // 👈 animation syncs with scroll
          markers: true // 👈 shows where trigger happens (for dev)
        }
      });
    }
}