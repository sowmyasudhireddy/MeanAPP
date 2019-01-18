import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
  canActivate: [AuthGuard]
},
{
  path: 'search',
  loadChildren: './search/search.module#SearchModule',
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
