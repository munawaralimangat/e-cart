import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit{
    
    constructor(private element:ElementRef,private renderer:Renderer2){
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#C0C0C0'
        // this.element.nativeElement.style.color = 'black'
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#C0C0C0')
        this.renderer.setStyle(this.element.nativeElement,'color','black')
    }
}