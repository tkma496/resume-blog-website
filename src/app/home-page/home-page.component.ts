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
  animationState = 'hidden';
  //Image assets to later be loaded in a CMS
  aboutMeImageUrl="../../assets/images/POWThin.jpg";
  homepageTitleImage="../../assets/images/Homepage HD belt.jpg";

    ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);
      // 👇 Set global config BEFORE using ScrollTriggers
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'DOMContentLoaded,load'
    });

//   gsap.utils.toArray<HTMLElement>('this.servicesCardTitle.nativeElement').forEach((el) => {
  gsap.utils.toArray<HTMLElement>('.servicesCardTitle').forEach((el) => {
      gsap.from(el, {
        x: -300,
        opacity: 0,
        duration: 5,
        ease: "elastic.out(1.5,0.2)",
        scrollTrigger: {
          //trigger: this.servicesCardTitle.nativeElement,
          trigger: el,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: "restart none restart none", // no scrub!
          //scrub: true, // 👈 animation syncs with scroll
          markers: true // 👈 shows where trigger happens (for dev)
        }
      })
    });      
  }
}