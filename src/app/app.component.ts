import { Component, OnInit, } from "@angular/core";
import { Router, NavigationEnd, } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger, } from 'gsap/ScrollTrigger';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Fixer Website';

  constructor(private router: Router) {}
ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // 👇 Set global config BEFORE using ScrollTriggers
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'DOMContentLoaded,load'
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Allow the DOM to finish updating first
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    });
  }
}

