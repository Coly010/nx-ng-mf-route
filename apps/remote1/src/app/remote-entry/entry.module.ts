import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MylibModule, mylibRoutes } from '@nx-ng-mf-route/mylib';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', children: mylibRoutes },
    ]),
    MylibModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
