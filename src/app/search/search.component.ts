import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from '../sharedData.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;
  @Output() searchEmitter = new EventEmitter();
  constructor(private sharedService: SharedDataService, private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.searchText).subscribe(res => {
      this.searchEmitter.emit(res);
    }, err => {
      console.log(err);
    });
  }

}
