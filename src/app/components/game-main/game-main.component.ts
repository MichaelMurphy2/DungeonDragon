import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    
    this.auth.user$.subscribe(user => this.user = user)
    
  }

}
