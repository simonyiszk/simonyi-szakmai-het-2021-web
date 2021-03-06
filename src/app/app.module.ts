import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';
import { NavComponent } from './common/nav/nav.component';
import { JelentkezesComponent } from './components/jelentkezes/jelentkezes.component';
import { SzulinapComponent } from './components/szulinap/szulinap.component';
import { CtaButtonComponent } from './common/cta-button/cta-button.component';
import { HamarosanComponent } from './components/hamarosan/hamarosan.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormButtonComponent } from './components/register-form-button/register-form-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { DecorationsComponent } from './common/decorations/decorations.component';
import { SzakmaiestComponent } from './components/szakmaiest/szakmaiest.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		HackathonComponent,
		MinikonfComponent,
		NavComponent,
		JelentkezesComponent,
		SzulinapComponent,
		CtaButtonComponent,
		HamarosanComponent,
		RegisterFormComponent,
		RegisterFormButtonComponent,
		FooterComponent,
		TimelineCardComponent,
		DecorationsComponent,
		SzakmaiestComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
