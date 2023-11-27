import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksPage } from './tasks.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TasksPageRoutingModule } from './tasks-routing.module';
import { EditTaskModalComponent } from './edit-task-modal/edit-task-modal.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TasksPageRoutingModule
  ],
  declarations: [TasksPage, EditTaskModalComponent, AddTaskModalComponent]
})
export class TasksPageModule {}
