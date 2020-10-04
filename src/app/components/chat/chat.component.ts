import { Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {auth, database, firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})




export class ChatComponent {
  title: string = "";
  content: string;
  author = "your name here";
  user: User;
  



 base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='

    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   


 // postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;
  
  constructor(private afs: AngularFirestore, public auth: AuthService) {
   
  }

  ngOnInit() {
    this.posts = this.afs.collection('posts', ref => ref.orderBy('timeStamp', 'desc').limit(3)).valueChanges();
    this.auth.user$.subscribe((user) => {
      this.user = user;
      this.title = user.displayName;
    })
  }

  addPost() {
    this.afs.collection('posts').add({
    'timeStamp': firestore.Timestamp.now(),
    'title': this.user.displayName,
    'author': this.author, 
    'content': this.content});
     this.sendMessage();
  }
  
  sendMessage() {
    // After Sending Message
   this.title ='';
   this.content= '';
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
      this.addPost();
    }
  }
  
 
  

}