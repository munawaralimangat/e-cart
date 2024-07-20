import { Directive,Renderer2,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private renderer:Renderer2,
    private element:ElementRef
  ) { }

  @HostListener('mouseenter') mouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'transform 0.3s ease');
  }

  @HostListener('mouseout') mouseOut(){
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
  }
}
