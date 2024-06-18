import { Component } from "@angular/core";

@Component({
    selector:'header-root',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    title = 'Logo'
    searchQuery = ''

    onSearchInput(event:Event):void {
        const inputElement = event.target as HTMLInputElement
        this.searchQuery = inputElement.value
    }
    
    onSearch():void {
        console.log(this.searchQuery)
    }
}