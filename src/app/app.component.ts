import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { AuthService } from './services/auth/auth.service';
import { NbWindowService } from '@nebular/theme';
import { DiceRollerComponent } from '../app/components/dice-roller/dice-roller.component';
import { User } from '../app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ddproj';

  user: User;

 public isDungeonMaster: boolean = true;
  
constructor(private sidebarService: NbSidebarService, public auth: AuthService,private windowService: NbWindowService){
}


 ngOnInit(){
  this.auth.user$.subscribe((user) => {
    this.user = user;
    /* user.uid => user id */
   // this.userID = this.user.isDungeonMaster;
  })
 }



openWindow() {
    this.windowService.open(DiceRollerComponent), {title: 'Dice Roll'};
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/openMe.wav";
    audio.load();
    audio.play();
  }

toggle() {
  //set false to make menu disappear
  this.sidebarService.toggle(true, 'left');
}

toggleCompact() {
  this.sidebarService.toggle(false, 'right');
}

items: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link:'home',
  },
  {
    title: 'Account',
    icon: 'shield-outline',
    expanded: true,
    children: [
      {
        title: 'My Profile',
        icon: 'person-outline',
        link:'home',
      },
      {
        title: 'Files',
        icon: 'folder-outline',
      },
      {
        title: 'Created Characters',
        icon: 'folder-outline',
      },
    ],
  },
  
  {
    title: 'Game',
    icon: 'activity-outline',
    expanded: true,
    children: [
      {
        title: 'Game Rooms',
        icon: 'person-outline',
      },
      {
        title: 'Rule Book',
        icon: 'book-outline',
        expanded: true,
        children:[
          {
          title:'spells',
          icon: 'book-open-outline',
          link: 'spellbook',
          }
        ]
      },
      {
        title: 'Create Character Sheet',
        icon: 'file-add-outline',
        link: 'charsheet',
      },
    ],
  },
  {
    title: 'Register',
    icon: 'person-outline',
    link: 'register',
 },
];




}
