import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable, of } from "rxjs";
import { AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Registration } from '../../models/registration/register';
import { AngularFireStorage } from '@angular/fire/storage';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user$: Observable<User>;


dungeonMaster: object;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private db: AngularFireDatabase,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }else {
        return of(null);
      }
    }));

   

  }

  


 async googleSignin() {
   const provider = new auth.GoogleAuthProvider();
   const credential = await this.afAuth.signInWithPopup(provider);
   return this.updateUserData(credential.user);
 }
 async signOut() {
   await this.afAuth.signOut();
   return this.router.navigate(['/']);
 }
 private updateUserData({uid, email, displayName, isDungeonMaster, isRegistered}: User ) {
   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

   const data = {
     uid,
     email,
     displayName,
     isDungeonMaster,
     isRegistered,
   };
   return userRef.set(data, { merge: true});
 }

 


}