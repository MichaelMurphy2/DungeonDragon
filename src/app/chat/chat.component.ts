import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { firebase } from '@firebase/app';
import {firestore } from 'firebase';
import { FormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title: string;
  content: string;
  author = "your name here";
  

 // postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;
  
  constructor(private afs: AngularFirestore) {
    
  }

  ngOnInit() {
    this.posts = this.afs.collection('posts', ref => ref.orderBy('timeStamp', 'desc').limit(3)).valueChanges();
  
  }

  addPost() {
    this.afs.collection('posts').add({
    'timeStamp': firestore.Timestamp.now(),
    'title': this.title,
    'author': this.author, 
    'content': this.content});
     this.sendMessage();
  }
  
  sendMessage() {
    // After Sending Message
   this.title ='';
   this.content= '';
  }
}
