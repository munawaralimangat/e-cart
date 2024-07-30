import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit{
    constructor(private element:ElementRef,private renderer:Renderer2){
    }

    @Input('setBackground') backColor:string = 'black';
    @Input('setText') textColor:string = 'white';
    @Input() title:string = 'Hello world'

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#C0C0C0'
        // this.element.nativeElement.style.color = 'black'
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.backColor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.textColor)
    }
}