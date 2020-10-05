import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";




//Nebular Imports
import { NbCheckboxModule, NbButtonModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbChatModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbUserModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbWindowModule } from '@nebular/theme';
import { NbToastrModule } from '@nebular/theme';
import { NbDialogModule } from '@nebular/theme';

//Firebase
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';


//components
import { RegisterComponent } from './components/register/register.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChatComponent } from './components/chat/chat.component';
import { GamepanelComponent } from './components/gamepanel/gamepanel.component';
import { CharsheetComponent } from './components/charsheet/charsheet.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { SpellbookComponent } from './components/open5e/spells/spellbook/spellbook.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DialogComponent,
    HomeComponent,
    CarouselComponent,
    ChatComponent,
    GamepanelComponent,
    DiceRollerComponent,
    CharsheetComponent,
    SpellbookComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbUserModule,
    NbChatModule,
    NbCheckboxModule,
    NbCardModule,
    NbWindowModule,
    NbCheckboxModule,
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbToastrModule.forRoot(),
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
