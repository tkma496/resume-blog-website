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
  /*This code is used along with Material Animations to provide the slide-in
  effect for a heading. However, unline when using GSAP and ScrollTrigger, it just slides in the second it crosses the line on the screen and can not be easily reversed. To control it with a scroll like Parallax that is where you need and Angular approved plug-in like GSAP.
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-10rem)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('600ms ease-out')
      ])
    ])
  ],*/
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
  
      /*This code performs a simple slide in from the side for the services
      card title*/
      /*gsap.from(this.servicesCardTitle.nativeElement, {
        x: -500,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: this.servicesCardTitle.nativeElement,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true, // 👈 animation syncs with scroll
          markers: true // 👈 shows where trigger happens (for dev)
        }
      });*/
      /*This code performs a slide in from the side, but it is using the 
      elastic.out ease to make the title bounce like its on the end of an 
      elastic band*/
      /*gsap.from(this.servicesCardTitle.nativeElement, {
        x: -300,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1.5,0.75)",
        scrollTrigger: {
          trigger: this.servicesCardTitle.nativeElement,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true, // 👈 animation syncs with scroll
          markers: true // 👈 shows where trigger happens (for dev)
        }
      });*/

      gsap.fromTo(this.servicesCardTitle.nativeElement,
        { x: -100, opacity: 0,},
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: this.servicesCardTitle.nativeElement,
            start: 'top 80%',
            scrub: true,
            markers: true, // 👈 shows where trigger happens (for dev)
          },
          onComplete: () => {
            gsap.to(this.servicesCardTitle.nativeElement, {
              opacity: 1,
              x: '+=10',
              repeat: 3,
              yoyo: true,
              duration: 0.1
            });
          }
        }
      );
    }
}