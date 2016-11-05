import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { TurnsComponent } from './turns/turns.component';
import { BusinessAreasComponent } from './business-areas/business-areas.component';

import { firebaseConfig } from './app.apis';


@NgModule({
  declarations: [
    AppComponent,
    MenuMainComponent,
    ClientPanelComponent,
    TurnsComponent,
    BusinessAreasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
