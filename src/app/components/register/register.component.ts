import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DialogComponent } from '../dialog/dialog.component';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/models/user';
import { Registration } from 'src/app/models/registration/register'; 



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
model: Registration = new Registration();

user: User;

userID: string;

private index: number = 0;
private message: string ="Sucessfully Registered";
private message2: string ="Registration Failed"; 
checked = false;
checked1 = false;
checked2 = false;
checked3 = false;

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
      this.userID = user.uid;
    })
    this.auth.user$.subscribe((user) => {
      this.user = user;
      this.userID = user.uid;
    })
  }

 private updateUserData() {
  const result = this.afs.collection('users').doc(this.user.uid);
  
   const data = {
    
     isDungeonMaster: this.model.dungeonMaster,
   };
   return result.set(data, { merge: true});
 }

  onSubmit(regform) {
    if(this.model.firstName == null || this.model.firstName == ""){
        console.log("invalid name");
        this.openDiag();
    }else{
    regform.timestamp = `${new Date()}`;
    const res = this.afs.collection('registration').doc(this.userID).set(regform);
   // this.updateUserData();
    this.router.navigate(['home']);
    }
  }

  showToast(position, status) {
     if(this.model.firstName == null || this.model.firstName == ""){
    
     }else{
      this.index += 1;
      this.toastrService.show(
        status || 'Success',
        `${this.message}`,
        { position, status });
     } 
  }

  toggle(checked: boolean){
    this.checked = checked;
  }

  toggle1(checked1: boolean){
    this.checked1 = checked1;
  }

  toggle2(checked2: boolean){
    this.checked2 = checked2;
  }
  toggle3(checked3: boolean){
    this.checked3 = checked3;
  }
 
   openDiag(){
    this.dialogService.open(DialogComponent,{context:'Failure'} )
   }
  
}
