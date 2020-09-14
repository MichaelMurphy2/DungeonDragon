import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './services/auth.service';
import { NbWindowService } from '@nebular/theme';
import { CharsheetComponent } from '../app/charsheet/charsheet.component';
import { DiceRollerComponent } from '../app/dice-roller/dice-roller.component';
import { ChatComponent } from "../app/chat/chat.component";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'nebProj';
 
  
  constructor(private readonly sidebarService: NbSidebarService, public auth: AuthService, private windowService: NbWindowService) { 
 
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    this.playAudio2();
    return false;
  }
  
  openWindow() {
    this.windowService.open(CharsheetComponent), {title: 'Character Creation Sheet'};
    this.playAudio();
  }
  
  openWindow2() {
    this.windowService.open(DiceRollerComponent, {title: 'Dice Roller'});
    this.playAudio();
  }

  openWindow3() {
    this.windowService.open(ChatComponent, {title: 'Game Chat'});
    this.playAudio();
  }

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true,
    },
    {
      title: 'in-dev Users',
      icon: 'people-outline',
      link: '/users'
    },
    {
    title: 'in-dev Register',
    icon: 'people-outline',
    link:'/register',
    home: true,
    },
    {
      title: 'in-dev Game Play',
      icon: 'people-outline',
      link: '/game-play'
    },
  ];
  
  ngOnInit(): void {
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/openMe.wav";
    audio.load();
    audio.play();
  }
  playAudio2(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/closeMe.wav";
    audio.load();
    audio.play();
  }


}

export class UserAvatarSettingsComponent {
  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='
}
