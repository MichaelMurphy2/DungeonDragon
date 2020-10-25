import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from "rxjs";
import { AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/database';
import { map, switchMap, first, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { of as observableOf } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  online: Observable<any[]>;
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
    console.log('let there be presence');
    this.updateOnUser().subscribe();
    this.updateOnDisconnect().subscribe();
    this.updateOnAway();

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

 async signOut() {
    const user = await this.getUser();
    this.setPresence('offline');
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

  getPresence(uid: string) {
    return this.db.object(`status/${uid}`).valueChanges();
  }

  getUser() {
   
    return this.afAuth.authState.pipe(first()).toPromise();
  }


 async setPresence(status: string) {
    const user = await this.getUser();
    if (user) {
      this.afs.collection('online').doc(user.uid).set({'name': user.displayName, 'status': status});
      return this.db.object(`status/${user.uid}`).update({ status, timestamp: this.timestamp });
    }
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  updateOnUser() {
      const connection = this.db.object('.info/connected').valueChanges().pipe(
      map(connected => connected ? 'online' : 'offline')
    );

    return this.afAuth.authState.pipe(
      switchMap(user =>  user ? connection : of('offline')),
      tap(status => this.setPresence(status))
    );
  }

  updateOnDisconnect() {
    return this.afAuth.authState.pipe(
      tap(user => {
        if (user) {
          this.db.object(`status/${user.uid}`).query.ref.onDisconnect()
            .update({
              status: 'offline',
              timestamp: this.timestamp
          });
        }
      })
    );
  }


updateOnAway() {
  document.onvisibilitychange = (e) => {

    if (document.visibilityState === 'hidden') {
      this.setPresence('away');
    } else {
      this.setPresence('online');
    }
  };
}



}

