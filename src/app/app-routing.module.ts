import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
    path:"job-details",
    component : JobDetailsComponent,
    // pathMatch : "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
