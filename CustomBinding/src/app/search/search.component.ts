import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output()
  public searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  public enteredSearchValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
