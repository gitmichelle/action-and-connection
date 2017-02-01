import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AuthComponent }           from './auth.component';
import { AuthDashboardComponent }  from './auth-dashboard.component';
import { ManageActComponent }    from './manage-act.component';
import { ManageConnectComponent }    from './manage-connect.component';
import { ManageVolunteerComponent }    from './manage-volunteer.component';
import { AuthRoutingModule }       from './auth-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    AuthDashboardComponent,
    ManageActComponent,
    ManageConnectComponent,
    ManageVolunteerComponent
  ]
})
export class AuthModule {}
