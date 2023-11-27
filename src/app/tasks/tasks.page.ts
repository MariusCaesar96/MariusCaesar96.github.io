import { Component, OnInit } from '@angular/core';
import { Run, TaskService } from '../task.service';
import { ModalController } from '@ionic/angular';
import { EditTaskModalComponent } from './edit-task-modal/edit-task-modal.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage implements OnInit {
  runs: Run[] = [];

  constructor(
    private tasksService: TaskService,
    private modalController: ModalController
    ) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks => {
      this.runs = tasks;
    })
  }

  addTask(task: Run) {
    this.tasksService.addTask(task);
  }

  updateTask(task: Run) {
    this.tasksService.updateTask(task);
  }

  deleteTask(task: Run) {
    this.tasksService.deleteTask(task);
  }

  presentEditModal(run: Run) {
    this.modalController.create({
      component: EditTaskModalComponent,
      componentProps: { run }
    }).then(modal => modal.present())
  }

  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddTaskModalComponent,
    });
    await modal.present();
    const { data: { data } } = await modal.onDidDismiss();
    this.addTask(data);
  }

}
