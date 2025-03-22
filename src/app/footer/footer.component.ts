import {Component, HostListener, ElementRef, AfterViewInit} from "@angular/core"

@Component({
  selector: "app-footer",
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    '(window:resize)': 'onResize()',
  }
})

export class FooterComponent implements AfterViewInit {
  currentYear = new Date().getFullYear()
  @HostListener('window:load')
  onResize() {
    const height = this.elementRef.nativeElement.offsetHeight;
    document.documentElement.style.setProperty('--footer-height', `${height}px`);
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.onResize();
  }
}