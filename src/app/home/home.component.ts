import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {  AuthService } from '../services/auth.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
flipped: boolean = false;

  constructor() {

   
   }

  ngOnInit(): void {
  }
  toggleView() {
    this.flipped = !this.flipped;
    }

    
}
