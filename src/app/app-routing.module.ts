import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsersComponent } from './components/sponsers/sponsers.component';
import { CfpComponent } from './components/cfp/cfp.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sponsers', component: SponsersComponent },
  { path: 'cfp', component: CfpComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
