import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  all = 0

  @Input()
  inStock = 0

  @Input()
  outOfStock = 0

  selectedRadioButton:string = 'all'

  @Output()
  SelectedFilterRadioButtonChange:EventEmitter<string> = new EventEmitter<string>()

  OnSelectedFilterRadioButtonChange(){
    this.SelectedFilterRadioButtonChange.emit(this.selectedRadioButton)
  }
}
