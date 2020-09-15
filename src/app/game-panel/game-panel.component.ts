import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../../app/services/game.service';
import { Observable } from 'rxjs';
import { DataService } from "../../app/services/data.service";
import { gameInfo } from "../../app/models/gameInfo";
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {

  private info: gameInfo[] = [];

  constructor(private DataService: DataService) {
    
    }
   
    ngOnInit(){
      let resp = this.DataService.getJobs();
      resp.subscribe((data)=>console.log)
       }

 

 


 


}
