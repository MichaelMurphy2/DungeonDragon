import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {

    
   }
 

  configUrl ='"spells": "https://api.open5e.com/spells/",';
  getConfig() {
    return this.http.get(this.configUrl);
  }
}


