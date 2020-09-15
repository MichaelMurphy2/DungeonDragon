import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    form.timestamp = `${new Date()}`;
    this.afs.collection('Character').add( form );

    window.alert('Character Submitted!');

    this.router.navigate(['home']);
  }

}
