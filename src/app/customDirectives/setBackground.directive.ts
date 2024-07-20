import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit{
    
    private element:ElementRef
    constructor(element:ElementRef){
        this.element = element
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#C0C0C0'
        this.element.nativeElement.style.color = 'black'
    }
}