import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  value = '';
  constructor( private searchService: NbSearchService,) { 

    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.value = data.term;
    })

  }

  ngOnInit(): void {
  }

  

}
