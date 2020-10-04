import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Spell } from "../../../models/open5e/spell";
import { DungeonRest } from "../../../models/open5e/dungeonRest";
import { map } from "rxjs/operators/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private httpClient: HttpClient) { }



  getDataFromAPI(url: string): Observable <DungeonRest>{
    return this.httpClient.get<DungeonRest>(url);
  }
  
  getSpells(): Observable<Spell[]> {
 
    return this.getDataFromAPI("https://api.open5e.com/spells/?limit=1000").pipe(
      map(res => { 
        return res.results.map(item => {
          return new Spell(
            item
          )
        });
      }));
  }
  
 






}
