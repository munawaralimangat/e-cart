import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText:string = ''
  updateText(event:any){
    this.searchText = event.target.value
  }
}


//Two way data binding is a combination of property binding and event binding