import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildDashboardComponent } from './build-dashboard/build-dashboard.component';

const routes: Routes = [
  { path: 'build-dashboard', component: BuildDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
