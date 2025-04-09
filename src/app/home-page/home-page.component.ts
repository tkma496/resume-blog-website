import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements AfterViewInit {
  @ViewChild('servicesCardTitle', { static: false }) servicesCardTitle!: ElementRef;
  //animationState = 'hidden';
  //Image assets to later be loaded in a CMS
  aboutMeImageUrl="../../assets/images/POWThin.jpg";
  homepageTitleImage="../../assets/images/Homepage HD belt.jpg";

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
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
      })
    });
  }
}