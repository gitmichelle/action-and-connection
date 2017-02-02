import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { AuthGuard } from './auth.service'


const appRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
