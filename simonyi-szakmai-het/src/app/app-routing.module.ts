import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonComponent } from './components/hackathon/hackathon.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MinikonfComponent } from './components/minikonf/minikonf.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'hackathon', component: HackathonComponent },
  { path: 'minikonferencia', component: MinikonfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
