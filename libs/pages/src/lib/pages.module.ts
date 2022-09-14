import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const pagesRoutes: Route[] = [
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesRoutes)],
  declarations: [Page1Component, Page2Component],
})
export class PagesModule {}
