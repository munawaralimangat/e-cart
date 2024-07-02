import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('searchInput') searchInputEl:ElementRef

  searchText:string = ''

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChange(){
   this.searchTextChanged.emit(this.searchText)
  }
}


/**
 * 
 */

//Two way data binding is a combination of property binding and event binding