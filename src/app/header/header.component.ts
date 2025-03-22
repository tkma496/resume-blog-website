import { Component, HostListener, ElementRef, AfterViewInit} from "@angular/core"

@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize()',
  }
})

export class HeaderComponent implements AfterViewInit {
  @HostListener('window:load')
  onResize() {
    const height = this.elementRef.nativeElement.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${height}px`);
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.onResize();
  }
}

