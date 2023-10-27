import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoommeetingPage } from './zoommeeting.page';

const routes: Routes = [
  {
    path: '',
    component: ZoommeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoommeetingPageRoutingModule {}
