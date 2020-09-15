import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { Character } from '../../models/char';


@Component({
  selector: 'app-view-char',
  templateUrl: './view-char.component.html',
  styleUrls: ['./view-char.component.scss']
})
export class ViewCharComponent implements OnInit {
  public character: Character[];
  private isLoggedIn: boolean = false;

  constructor(private authSvc: AuthService, private afs: AngularFirestore) { }

  ngOnInit(): void {

    this.authSvc.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;

        this.afs.collection('Character', ref => ref.orderBy('timestamp','desc').limit(3))
        .valueChanges().pipe(
          map(res => res.map( commentsRes => new Character(commentsRes) ))
        ).subscribe(res => this.character = res);

      }
    }
    )}
}

