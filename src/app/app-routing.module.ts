import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { HamarosanComponent } from './components/hamarosan/hamarosan.component';
import { JelentkezesComponent } from './components/jelentkezes/jelentkezes.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';
import { SzakmaiestComponent } from './components/szakmaiest/szakmaiest.component';
import { SzulinapComponent } from './components/szulinap/szulinap.component';

const routes: Routes = [
	{
		path: '',
		component: LandingPageComponent,
		pathMatch: 'full',
	},
	{
		path: 'szakmaiest',
		component: SzakmaiestComponent,
	},
	{
		path: 'minikonferencia',
		component: MinikonfComponent,
	},
	{
		path: 'szulinap',
		redirectTo: 'hamarosan',
	},
	{
		path: 'jelentkezes',
		component: JelentkezesComponent,
	},
	{
		path: 'hamarosan',
		component: HamarosanComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
			scrollPositionRestoration: 'enabled',
			onSameUrlNavigation: 'reload',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
