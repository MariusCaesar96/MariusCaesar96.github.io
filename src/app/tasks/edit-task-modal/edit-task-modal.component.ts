
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Run } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent {
  @Input() run!: Run;

  constructor(
    private modalController: ModalController,
    ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  onSubmit(){
    this.modalController.dismiss({
      'dismissed': true,
      data: this.run
    });
  }
}