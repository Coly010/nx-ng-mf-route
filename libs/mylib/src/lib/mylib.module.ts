import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';

export const mylibRoutes: Route[] = [{
  path: '', component: NavLayoutComponent, loadChildren: () => import('@nx-ng-mf-route/pages').then(m => m.PagesModule)
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mylibRoutes)],
  declarations: [NavLayoutComponent],
  exports: [],
})
export class MylibModule {}
