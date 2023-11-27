
import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Run, TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent {
  @Input() run!: Run;

  constructor(
    private modalController: ModalController,
    private taskService: TaskService,
    ) {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onSubmit(){
    this.taskService.updateTask(this.run);
    this.dismiss(); 
  }
}