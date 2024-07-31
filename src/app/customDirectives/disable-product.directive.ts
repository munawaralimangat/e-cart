import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector:'[disableProduct]'
})


export class DisableProductDirective {
    constructor(private element:ElementRef,private renderer:Renderer2){}

    @Input() set disableProduct(disable:boolean){
        if(!disable){
           this.renderer.addClass(this.element.nativeElement, 'opacity-50');
           this.renderer.addClass(this.element.nativeElement,'pointer-events-none')
        }else{
            this.renderer.removeClass(this.element.nativeElement,'opacity-50');
            this.renderer.removeClass(this.element.nativeElement,'pointer-events-none')
        }
    }
}