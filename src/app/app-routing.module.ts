import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePlayComponent } from '../app/game-play/game-play.component';
import { HomeComponent } from '../app/home/home.component';
import { RegisterComponent } from "../app/register/register.component";
import { CharsheetComponent } from "../app/charsheet/charsheet.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'game-play', component: GamePlayComponent},
  {path: 'charsheet', component: CharsheetComponent},
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
