import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './services/auth.service';
import { NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebProj';
  
  constructor(private readonly sidebarService: NbSidebarService, public auth: AuthService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
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
    }
  ];
  items1: NbMenuItem[] = [
    {
      title: 'Character Sheet',
      icon: 'home-outline',
      link: '/charsheet',
      home: true,
    },
    {
      title: 'in-dev',
      icon: 'people-outline',
      link: '/users'
    },
    {
    title: 'in-dev',
    icon: 'people-outline',
    link:'/register',
    home: true,
    },
    {
      title: 'in-dev',
      icon: 'people-outline',
      link: '/game-play'
    }
  ];
  ngOnInit(): void {
  }

}
export class UserAvatarSettingsComponent {
  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='
}
