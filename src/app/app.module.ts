import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PortalComponent } from './portal/portal.component';
import { SharedService } from './SharedService';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
