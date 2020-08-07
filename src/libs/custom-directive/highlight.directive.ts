import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'orange';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bigger();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.smaller();
  }

  // private highlighter(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // makeimvisible() {
  //   this.el.nativeElement.style = 'visibility:hidden';
  // }
  // makevisible() {
  //   this.el.nativeElement.style = 'visibility:visible';
  // }

  bigger() {
    this.el.nativeElement.style = 'font-size:3rem';
  }
  smaller() {
    this.el.nativeElement.style = 'font-size:1rem';
  }
}
