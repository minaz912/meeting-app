import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [
  {
    path: 'create-meeting',
    component: CreateMeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
