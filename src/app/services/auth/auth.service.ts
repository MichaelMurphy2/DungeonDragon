import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from "rxjs";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject, snapshotChanges } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Registration } from '../../models/registration/register';
import { AngularFireStorage } from '@angular/fire/storage';
import { of as observableOf } from 'rxjs';



import { Roles } from '../../models/roles';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user$: Observable<User>;

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );

  isDungeonMaster = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object(uid + '/isDungeonMaster').valueChanges();
      }
    })
  );

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private db: AngularFireDatabase
  ) {


    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  signOut() {
    this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      roles: {
        subscriber: true
      }
    }
    return userRef.set(data, { merge: true })
  };
}

