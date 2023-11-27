import { Component, OnInit } from '@angular/core';
import { Run, TaskService } from '../task.service';
import { ModalController } from '@ionic/angular';
import { EditTaskModalComponent } from './edit-task-modal/edit-task-modal.component';

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

  addTask() {
    const task: Run = {
      title: 'New Task',
      description: 'New Task Description',
      duration: '00:00:00',
      distance: 0,
      thumbnail: '',
      location: 'Abuja, Nigeria',
      date: new Date()
    }
    this.tasksService.addTask(task);
  }

  updateTask(task: Run) {
    this.tasksService.updateTask(task);
  }

  deleteTask(task: Run) {
    this.tasksService.deleteTask(task);
  }

  presentModal(run: Run) {
    this.modalController.create({
      component: EditTaskModalComponent,
      componentProps: { run }
    }).then(modal => modal.present())
  }

}
