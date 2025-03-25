import { Component, NgModule, HostListener, OnInit, OnDestroy } from "@angular/core"
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs'
import * as LocomotiveScroll from 'locomotive-scroll';



@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private scroll: any;
  routerSubscription: Subscription;
  title = 'Fixer Website'
  //@HostListener('window:load')

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.scroll) {
        this.scroll.destroy();
      }
      this.initLocomotiveScroll();
    });
  }

  initLocomotiveScroll(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[app-container]') as HTMLElement,
      smooth: true,
      scrollFromAnywhere: true,
      resetNativeScroll: true
    });
  }
  ngOnInit() {
   this.initLocomotiveScroll();
  }

  ngOnDestroy(): void {
    if (this.scroll) {
      this.scroll.destroy();
    }
    if (this.routerSubscription) {
        this.routerSubscription.unsubscribe();
    }
  }
}

