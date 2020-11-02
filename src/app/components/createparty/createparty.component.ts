import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { gameSession } from '../../models/gameSession/gameSession';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createparty',
  templateUrl: './createparty.component.html',
  styleUrls: ['./createparty.component.scss']
})
export class CreatepartyComponent implements OnInit {
model: gameSession = new gameSession;

checked3 = false;


  online:Observable<any[]>;

  user: User;


 aTest: Observable<any[]>;

  checked = false;

  position = 'top-right';
  status = 'danger';
  status1 = 'primary';
  message ="Sucessfully Registered";
  message1 ='Registration Failed';
  title ="Registration";





  constructor(
      private afs: AngularFirestore,
      public auth: AuthService,
      private db: AngularFireDatabase,
      private toastrService: NbToastrService,
      private router: Router,
      ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user)
    this.online = this.afs.collection('online', ref => ref.orderBy('name', 'desc').limit(25)).valueChanges();
  }
  
  

  toggle(checked: boolean) {
    this.checked = checked;
    if(this.checked == true){
      console.log(this.user.uid + "  " + checked);
    }
    if(this.checked == false){
      this.afs.collection('groupsession').doc(this.user.uid).update({"partyMember": this.user.uid});
    }
  }

 

  toggle3(checked3: boolean){
    this.checked3 = checked3;
    if(this.checked3 == true){
      const itemRef = this.db.object(this.user.uid);
      itemRef.update({isDungeonMaster: this.model.isDungeonMaster});
    }
    if(this.checked3 == false){
      const itemRef = this.db.object(this.user.uid);
      itemRef.update({isDungeonMaster: this.model.isDungeonMaster});
    }
  }

  onSubmit(gamesession){
    gamesession.timestamp = `${new Date()}`;
    this.saveDungeonMaster(this.user.uid);
    this.afs.collection('groupsession').doc(this.user.uid).set(gamesession);
    this.afs.collection('groupsession').doc(this.user.uid).update({"partyLeader": this.user.uid})
  }


  saveDungeonMaster(userID){
    const itemRef = this.db.object(userID);
    itemRef.update({isDungeonMaster: this.model.isDungeonMaster});
  }

  showToast() {
  
     this.toastAlert(this.status, this.position);
    
 }
 toastAlert(status, position){
  const toastRef: NbToastRef = this.toastrService.show(this.message1, this.title, {status: status, position: position});
}
toastAlert1(status, position){
  const toastRef: NbToastRef = this.toastrService.show(this.message, this.title, {status: status, position: position});
}

}
