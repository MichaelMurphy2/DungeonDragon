import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
   public value: string;
  
  constructor( private route: ActivatedRoute ) {}

  ngOnInit()  {
    this.value = this.route.snapshot.paramMap.get('value');
  }




}
