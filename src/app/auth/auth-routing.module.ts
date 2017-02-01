import { AuthGuard }                from '../auth-guard.service';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        children: [
          { path: 'act', component: ActComponent },
          { path: 'volunteer', component: VolunteerComponent },
          { path: 'connect', component: ConnectComponent },
          { path: '', component: AuthDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
