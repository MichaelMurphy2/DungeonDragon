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


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'charsheet', component: CharsheetComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'spellbook', component:SpellbookComponent},
  {path: 'backgrounds', component:BackgroundsComponent},
  {path: 'sections', component:SectionsComponent},
  {path: 'feats', component:FeatsComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: 'magicitems', component: MagicitemsComponent},
  {path: 'conditions', component:ConditionsComponent},
  {path: 'classes', component:ClassesComponent},
  {path: 'races', component: RacesComponent},

  {path: '**', redirectTo: 'home'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
