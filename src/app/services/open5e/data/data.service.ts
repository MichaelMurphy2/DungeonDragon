import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Spell } from "../../../models/open5e/spell";
import { Background } from "../../../models/open5e/background";
import { Conditions } from "../../../models/open5e/conditions";
import { Feats } from "../../../models/open5e/feats";
import { Weapons } from "../../../models/open5e/weapons";
import { Sections } from "../../../models/open5e/sections";
import { Magicitems } from "../../../models/open5e/magicitems";
import { Classes } from "../../../models/open5e/classes";
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

  getBackgrounds(): Observable<Background[]> {
    return this.getDataFromAPI("https://api.open5e.com/backgrounds/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Background(
            item
          )
        });
      })
    );
  }

  getConditions(): Observable<Conditions[]> {
    return this.getDataFromAPI("https://api.open5e.com/conditions/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Conditions(
            item
          )
        });
      })
    );
  }
  
  getFeats(): Observable<Feats[]> {
    return this.getDataFromAPI("https://api.open5e.com/feats/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Feats(
            item
          )
        });
      })
    );
  }

  getSections(): Observable<Sections[]> {
    return this.getDataFromAPI("https://api.open5e.com/sections/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Sections(
            item
          )
        });
      })
    );
  }

  getWeapons(): Observable<Weapons[]> {
    return this.getDataFromAPI("https://api.open5e.com/weapons/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Weapons(
            item
          )
        });
      })
    );
  }

  getMagicItems(): Observable<Magicitems[]> {
    return this.getDataFromAPI("https://api.open5e.com/magicitems/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Magicitems(
            item
          )
        });
      })
    );
  }
  
  getClasses(): Observable<Classes[]> {
    return this.getDataFromAPI("https://api.open5e.com/classes/?limit=1000").pipe(
      map(res => {
        return res.results.map(item => {
          return new Classes(
            item
          )
        });
      })
    );
  }
 






}
