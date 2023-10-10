import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RunningPage } from './running.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RunningPageRoutingModule } from './running-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RunningPageRoutingModule
  ],
  declarations: [RunningPage]
})
export class RunningPageModule {}
