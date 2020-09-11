import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePlayComponent } from '../app/game-play/game-play.component';
import { HomeComponent } from '../app/home/home.component';
import { RegisterComponent } from "../app/register/register.component";
import { CharsheetComponent } from "../app/charsheet/charsheet.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'game-play', component: GamePlayComponent,canActivate: [AuthGuard]},
  {path: 'charsheet', component: CharsheetComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
