import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { AuthGuard } from './auth.service'


const appRoutes: Routes = [
  // { path: '',   redirectTo: '/member', pathMatch: 'full' },
  //
  // {
  // path: 'member',
  // loadChildren: 'app/member/member.module#MemberModule',
  // canLoad: [AuthGuard]
  // },
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
