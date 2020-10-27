import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { gameSession } from '../../models/game-sessions/session';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createparty',
  templateUrl: './createparty.component.html',
  styleUrls: ['./createparty.component.scss']
})
export class CreatepartyComponent implements OnInit {

  form: FormGroup;
  orderData = [];


  online:Observable<any[]>;

  user: User;


  uid;

  checked = false;

  constructor(private afs: AngularFirestore, public auth: AuthService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user)
    this.online = this.afs.collection('online', ref => ref.orderBy('name', 'desc').limit(25)).valueChanges();
    this.uid = this.user.uid;
  }
  
  

  toggle(checked: boolean) {
    this.checked = checked;
  }

  saveBackend(user){
    const itemRef = this.db.object(this.user.uid);
    itemRef.update( this.user.uid + '/gamesession ' + {uid: this.user.uid, displayName: this.user.displayName, isDungeonMaster: this.user.roles.isDungeonMaster});
  }



}
