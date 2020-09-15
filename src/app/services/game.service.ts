import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {
baseUrl:string ="https://api.open5e.com/";
  constructor(private httpClient: HttpClient) {

    
   }
 

   
get_Jobs(){
  return this.httpClient.get(this.baseUrl);
}





}


