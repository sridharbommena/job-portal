import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "portal",
    pathMatch: "full"
  },
  {
    path: "portal",
    component: PortalComponent
  },
  {
    path:"job-details/:job_id",
    component : JobDetailsComponent,
    // pathMatch : "full"
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
