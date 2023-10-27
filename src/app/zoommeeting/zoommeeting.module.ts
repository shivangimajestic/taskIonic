import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoommeetingPageRoutingModule } from './zoommeeting-routing.module';

import { ZoommeetingPage } from './zoommeeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoommeetingPageRoutingModule
  ],
  declarations: [ZoommeetingPage]
})
export class ZoommeetingPageModule {}
