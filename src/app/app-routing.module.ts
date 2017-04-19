import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'account/login',
    component: UserComponent
  },
  {
    path: 'create-meeting',
    component: CreateMeetingComponent
  },
  {
    path: '*',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
