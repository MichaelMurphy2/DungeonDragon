import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../app/components/register/register.component';
import { CharsheetComponent } from './components/charsheet/charsheet.component';
import { HomeComponent } from './components/home/home.component';
import { SpellbookComponent } from '../app/components/open5e/spells/spellbook/spellbook.component';
import { BackgroundsComponent } from './components/open5e/backgrounds/backgrounds.component';
import { SectionsComponent } from './components/open5e/sections/sections.component';
import { FeatsComponent } from './components/open5e/feats/feats.component';
import { ConditionsComponent } from './components/open5e/conditions/conditions.component';
import { WeaponsComponent } from './components/open5e/weapons/weapons.component';
import { MagicitemsComponent } from './components/open5e/magicitems/magicitems.component';
import { ClassesComponent} from './components/open5e/classes/classes.component';
import { RacesComponent} from './components/open5e/races/races.component';
import { PlanesComponent} from './components/open5e/planes/planes.component';
import { MonstersComponent} from './components/open5e/monsters/monsters.component';
import { AuthGuardService } from './services/guards/authGuard/auth-guard.service';
import { GameMainComponent} from '../app/components/game-main/game-main.component'
import { UploaderComponent } from './components/uploader/uploader.component';
import { ViewUploadsComponent } from './components/view-uploads/view-uploads.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchPageComponent } from './components/open5e/search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'charsheet', component: CharsheetComponent},
  {path: 'uploader', component: UploaderComponent, canActivate: [AuthGuardService]},
  {path: 'viewuploads', component: ViewUploadsComponent, canActivate: [AuthGuardService]},
  {path: 'game-main', component:GameMainComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'spellbook', component:SpellbookComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'backgrounds', component:BackgroundsComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'sections', component:SectionsComponent,children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'feats', component:FeatsComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'weapons', component: WeaponsComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'magicitems', component: MagicitemsComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'conditions', component:ConditionsComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'classes', component:ClassesComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'planes', component: PlanesComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'races', component: RacesComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: 'monsters', component: MonstersComponent, children: [{ path: 'search', component: SearchPageComponent }]},
  {path: '**', redirectTo: 'home'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
