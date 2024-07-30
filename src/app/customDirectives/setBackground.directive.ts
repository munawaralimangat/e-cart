import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit{
    constructor(private element:ElementRef,private renderer:Renderer2){
    }

    // @Input('setBackground') backColor:string = 'black';
    // @Input('setText') textColor:string = 'white';

    @Input('setBackground') changeTextandBackColor: {backColor:string,textColor:string}

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#C0C0C0'
        // this.element.nativeElement.style.color = 'black'
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextandBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextandBackColor.textColor)
    }
}