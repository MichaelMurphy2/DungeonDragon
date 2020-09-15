import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
//Nebular Imports
import { NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbUserModule } from '@nebular/theme';
import { ChatComponent } from './chat/chat.component';
import { NbInputModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbChatModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NbWindowModule } from '@nebular/theme';
//Firebase Imports
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
//Components
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { CharModalComponent } from './char-modal/char-modal.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { ConversationalUIComponent } from './conversational-ui/conversational-ui.component';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { ViewCharComponent } from './components/view-char/view-char.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    GamePlayComponent,
    LoadGameComponent,
    CharsheetComponent,
    CharModalComponent,
    DiceRollerComponent,
    ConversationalUIComponent,
    GamePanelComponent,
    ViewCharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    NbIconModule,               
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    NbUserModule,
    NbChatModule,
    NbCardModule,
    NbWindowModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
