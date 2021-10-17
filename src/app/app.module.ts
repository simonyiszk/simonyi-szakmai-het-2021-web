import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HackathonComponent,
    MinikonfComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}