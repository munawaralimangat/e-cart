import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }

  @HostBinding('style.backgroundColor')
  backgroundColor:string = 'darkRed'

  @HostBinding('style.color')
  color:string = 'white'

  //hostBinding can set/bind some properties in to the element 

  //hostListener can set or unset some properties on events, such as mouse hover
  @HostListener('mouseenter') mouseEnter(){
    this.backgroundColor = 'skyBlue'
    this.color = 'black'
  }
  
  @HostListener('mouseout') mouseOut(){
    this.backgroundColor = 'darkRed'
    this.color = 'white'
  }
}
