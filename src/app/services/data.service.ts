import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://api.open5e.com/";

  constructor(private httpClient: HttpClient) { }


  getJobs(){
    return this.httpClient.get(this.baseUrl);
  }
}
