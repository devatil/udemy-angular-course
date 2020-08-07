import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() hello: string;
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'orange';
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.bigger();
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.smaller();

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
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

  // bigger() {
  //   this.el.nativeElement.style = 'font-size:3rem';
  // }
  // smaller() {
  //   this.el.nativeElement.style = 'font-size:1rem';
  // }

  // renlendir() {
  //   this.el.nativeElement.style.color = 'red';
  // }
  // renlendirime() {
  //   this.el.nativeElement.style.color = 'blue';
  // }
}
