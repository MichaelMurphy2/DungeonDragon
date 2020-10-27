import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';




@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.scss']
})


export class ViewCharactersComponent implements OnInit {

  constructor( private toastrService: NbToastrService,
    private storage: AngularFireStorage,
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router) { }

  ngOnInit(): void {
  }

}
