import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
//ezport class HomePageComponent implements AfterViewInit {
//  toolbarHeight: number = 64; // Default height of the toolbar

//  ngAfterViewInit() {
//    const toolbar = document.querySelector('mat-toolbar');
//    if (toolbar) {
//      this.toolbarHeight = toolbar.clientHeight;
//    }
//  }

//  getImageContainerHeight(): string {
//    return `calc(100vh - ${this.toolbarHeight}px)`;
//  }
//}
