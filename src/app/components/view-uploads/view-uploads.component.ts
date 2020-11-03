import { Component, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../../models/photo.model';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';

@Component({
  selector: 'app-view-uploads',
  templateUrl: './view-uploads.component.html',
  styleUrls: ['./view-uploads.component.scss']
})
export class ViewUploadsComponent implements OnInit {
  public images: Photo[];
  private isLoggedIn: boolean = false;

  user: User;

  selectedFile:string[];
  constructor(private auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
    this.auth.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;

        this.afs.collection('photos', ref => ref.where('user.uid', '==', user.uid))
        .valueChanges().pipe(
          map(res => res.map( imgResult => new Photo(imgResult) ))
        ).subscribe(res => this.images = res)
      } else {
        this.isLoggedIn = false;

        this.afs.collection('photos')
        .valueChanges().pipe(
          map(res => res.map( imgResult => new Photo(imgResult) ))
        ).subscribe(res => this.images = res);
      }
    });
    this.selectedFile = new Array<string>();
  }



  toggle(e:any, downloadUrl:string) {
    if(e.target.checked){
           console.log(downloadUrl + "checked");
           this.selectedFile.push(downloadUrl);
    }else {
       console.log(downloadUrl + 'unchecked');
       //filter to uncheck what is not checked yet keep what is
       this.selectedFile = this.selectedFile.filter(m => m != downloadUrl);
    }
    console.log(this.selectedFile);
 }







}
