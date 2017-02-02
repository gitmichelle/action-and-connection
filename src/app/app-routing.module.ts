import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { AuthGuard } from './auth.service'


const appRoutes: Routes = [
  // { path: '',   redirectTo: '/auth', pathMatch: 'full' },

  {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule',
  canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
