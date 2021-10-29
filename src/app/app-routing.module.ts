import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { JelentkezesComponent } from './components/jelentkezes/jelentkezes.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';
import { SzulinapComponent } from './components/szulinap/szulinap.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent, pathMatch: 'full' },
	{ path: 'minikonferencia', component: MinikonfComponent },
	{ path: 'szulinap', component: SzulinapComponent },
	{ path: 'jelentkezes', component: JelentkezesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
