import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';
import { NavComponent } from './common/nav/nav.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		HackathonComponent,
		MinikonfComponent,
		NavComponent,
		RegisterFormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
