import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { CharacterSheetObj } from '../../models/character/characterSheetObj'
import { CharacterSheet } from '../../models/character/characterSheet'

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.scss']
})


export class ViewCharactersComponent implements OnInit {
  model: CharacterSheet = new CharacterSheet( );
  user: User;
  checked = false;
  checked1 = false;
  checked2 = false;
  checked3 = false;
  checked4 = false;
  checked5 = false;
  checked6 = false;
  checked7 = false;
  checked8 = false;
  checked9 = false;
  checked10 = false;
  checked11 = false;
  checked12 = false;
  checked13 = false;
  checked14 = false;
  checked15 = false;
  checked16 = false;
  checked17 = false;
  checked18 = false;
  checked19 = false;
  checked20 = false;
  checked21 = false;
  checked22 = false;
  checked23 = false;
  checked24 = false;
  checked25 = false;
  checked26 = false;
  checked27 = false;
  checked28 = false;
  checked29 = false;
  checked30 = false;
  
  constructor( private toastrService: NbToastrService,
    private storage: AngularFireStorage,
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router) { }

  ngOnInit(){
    this.auth.user$.subscribe(data => this.user = data);
   
  }

}
